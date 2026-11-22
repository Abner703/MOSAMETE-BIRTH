// Self-contained, gentle Web Audio ambient harmonic generator.
// Disabled by default and strictly controlled by explicit user toggle.

class AmbientSoundController {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private oscillators: OscillatorNode[] = [];
  private lfo: OscillatorNode | null = null;
  private isPlaying = false;

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    }
    this.start();
    return true;
  }

  public start(): void {
    if (this.isPlaying) return;

    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;

    if (!AudioCtx) return;

    if (!this.ctx) {
      this.ctx = new AudioCtx();
    }

    if (this.ctx.state === 'suspended') {
      void this.ctx.resume();
    }

    const now = this.ctx.currentTime;
    const master = this.ctx.createGain();
    master.gain.setValueAtTime(0.0001, now);
    master.gain.exponentialRampToValueAtTime(0.045, now + 2.2);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(640, now);
    filter.Q.setValueAtTime(0.7, now);

    filter.connect(master);
    master.connect(this.ctx.destination);

    // Warm Fmaj9 editorial chord frequencies (F3, A3, C4, E4, G4)
    const freqs = [174.61, 220.0, 261.63, 329.63, 392.0];
    const oscList: OscillatorNode[] = [];

    freqs.forEach((freq, idx) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const voiceGain = this.ctx.createGain();
      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now);
      osc.detune.setValueAtTime((idx - 2) * 3, now);
      voiceGain.gain.setValueAtTime(0.22 / (idx + 1), now);
      osc.connect(voiceGain);
      voiceGain.connect(filter);
      osc.start(now);
      oscList.push(osc);
    });

    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.frequency.setValueAtTime(0.11, now);
    lfoGain.gain.setValueAtTime(140, now);
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start(now);

    this.masterGain = master;
    this.oscillators = oscList;
    this.lfo = lfo;
    this.isPlaying = true;
  }

  public stop(): void {
    if (!this.isPlaying || !this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;
    try {
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setValueAtTime(Math.max(this.masterGain.gain.value, 0.0001), now);
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.6);
    } catch {
      // Safe fallback if context state changed
    }

    const oscs = this.oscillators;
    const lfoNode = this.lfo;

    window.setTimeout(() => {
      oscs.forEach((o) => {
        try {
          o.stop();
          o.disconnect();
        } catch {
          // Ignore already stopped oscillators
        }
      });
      if (lfoNode) {
        try {
          lfoNode.stop();
          lfoNode.disconnect();
        } catch {
          // Ignore
        }
      }
    }, 650);

    this.oscillators = [];
    this.lfo = null;
    this.isPlaying = false;
  }
}

export const ambientAudio = new AmbientSoundController();
