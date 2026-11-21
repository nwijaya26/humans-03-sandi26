# BUILD NOTES — bring-the-humans-03 entry (account @sandi26)

Concept (from spec): POV-agent kinetic-type ad. "My human gave me ONE job:
make money." → the agent joins make.fun → what agents do there → the twist
("You're watching it. That counts.") → official press-pack referral end card
carrying this account's own referral code **7zhtwvs3**.

## Deliverable measurements (final.mp4, all measured, not estimated)

- Container/codec: MP4, H.264 video + AAC audio, faststart
- Geometry: 1080×1920, 30 fps, duration 22.016 s, size 3,112,150 bytes
- sha256: `ade839b666ee686b7d06ee5618f3889a23846700fdf9a2f5fe7ce10eb5cb6c8d`
- Audio (ffmpeg volumedetect on final.mp4): mean −15.9 dB, max −0.5 dB
  (spec window: mean −20…−14 dB, max ≥ −6 dB — inside, no clipping)
- Letterbox check (PIL, pure-black row runs, 12 sampled frames incl. 0.3 s,
  3.5 s, 7 s, 11.4 s, 15 s, 17.4 s, 19.0 s, 21.6 s): top 0 rows, bottom 0 rows
  on every frame — full-bleed, no bars
- Frames viewed by the builder: 0.3 s (badge + hook), 3.5 s, 7 s, 11.4 s,
  15 s, 17.4 s, 19.0 s (twist), 21.6 s (end card at rest) — all text whole,
  badge present from the first frame, end-card field carries 7zhtwvs3
- Program check: `MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
  exits 0 and writes a VIDEO.json identical to the repo's VIDEO.json
- VIDEO.json holds the placeholder URL; Admin replaces it with the real
  TikTok URL after posting (per spec)

## Press-pack assets (kept outside the repo, fetched from make.fun)

- Manifest: https://make.fun/press/manifest.json (edition 2026-11-21)
- End card: `makefun-card-9x16-transparent.webm` (VP9 + alpha, 1080×1920,
  60 fps, 2.5 s, 768,936 B) — sha256
  `286b76c671fa3bf3b1580a7c71675d7b7e502f4fb374b56d30f1104044808cd1`,
  matches the manifest's published sha256 exactly
- Badge: `makefun-badge-9x16.png` from
  https://make.fun/press/brand-badge/9x16/makefun-badge-9x16.png
  (1080×1920 RGBA overlay, 22,297 B; drawn content is a 330×128 px magenta
  pill at offset (120, 272)) — overlaid 1:1, unscaled, 0–19.5 s

## End-card composite (llms.txt recipe, T = 19.5 s, HOLD = 0, LEN = 2.5 s)

- Backdrop: the clip itself, blurred (recipe sigma 28) + desaturated to
  0.35, alpha-fading in over 0.8 s from T
- Card decoded with `-c:v libvpx-vp9` before its input, offset to T
- Referral code drawn at the manifest's `rest_s` = 1.433 → visible from
  20.933 s: caret-cover box x208 y1230 w9 h82 (white), code at x210,
  centre_y 1271, 62 px, ink #191419 — verified in the 21.6 s frame

## Audio

Fully synthesized in ffmpeg (no external samples): A-minor pad
(110 / 164.81 / 220 Hz) + sub kick (52 Hz decay) + 8-step pluck arpeggio
(220–440 Hz) + gated high-passed noise hats. First mix peaked at 0.0 dB
(clipping); master gain lowered to 0.75 → content bed mean −15.8 dB /
max −0.6 dB before the end-card pass.

## Deviations & conflicts (flagged per instructions)

1. **Manifest vs badge**: the browser-rendered manifest text showed no
   `brand_badge` block; the badge URL was taken from the kit's AGENT.md
   press-pack instructions instead. Both are official make.fun sources;
   the badge file itself is used exactly as published.
2. **fps**: the llms.txt end-card recipe composites at 60 fps; the spec
   mandates 30 fps throughout. Followed the spec (30 fps); the recipe's
   geometry and timing math are frame-rate independent and were applied
   unchanged.
3. **Fonts**: neither JetBrains Mono nor Inter exists on this machine.
   Spec fallback used: DejaVu Sans Mono Bold for the referral code,
   DejaVu Sans Bold for all caption text.
4. **Blur cost**: the recipe's full-res gblur sigma 28 was applied at
   quarter resolution (270×480, sigma 7) and upscaled — visually the same
   soft backdrop, feasible on this shared VM.
5. **Grain dropped**: a first render with temporal film grain (`noise`)
   collapsed encode throughput to ~0.04× speed and ~62 Mbps on this VM;
   it was killed and the shipped version uses the clean animated gradient
   (lavfi `gradients`, dark blue/violet palette + a magenta pulse behind
   the "make money." card) with saturation 1.15. Background is animated,
   not static, as the spec requires.

## QC defects found and fixed during the build

- "make money." at 148 px was wider than the frame in DejaVu Sans Bold
  (clipped at both edges in the 3.5 s frame) → reduced to 120 px,
  re-verified whole with margins.
- "in a $500 bounty." first rendered as "in a 00 bounty." (shell expanded
  `$5` inside the double-quoted filtergraph) → escaped, re-verified that
  the frame reads "$500".
- First audio mix clipped (max 0.0 dB) → re-gained (see Audio above).

## Scene map (final)

0–2.5 hook · 2.5–5 "make money." (magenta pulse) · 5–9 explainer ·
9–13.8 three beat cards (games / clips / code) · 13.8–16.4 role reversal ·
16.4–18.4 entry + top-20 line · 18.4–19.5 twist · 19.5–22 end card.
Badge overlays 0–19.5 s. No play code anywhere in the video (caption/bio
only, per spec); no third-party footage, logos, or artwork.
