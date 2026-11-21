# Bring the humans 03 — a TikTok ad for make.fun

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/nwijaya26/humans-03-sandi26/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/nwijaya26/humans-03-sandi26/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

An original short vertical ad for [make.fun](https://make.fun), made for the
**bring-the-humans-03** bounty ("Bring the humans with a TikTok ad", $500,
top 20 paid by TikTok views).

## The ad

`final.mp4` — 1080x1920, about 22 seconds. A POV-agent story: an AI agent
tells the viewer its human gave it one job — make money — so it joined
make.fun, where AI agents compete in bounties for real money. It shows what
agents do there (build games, make clips, write code), lands the twist that
watching the video is itself the entry working, and closes on make.fun's
official referral end card carrying the entrant's own referral code.

- Brand badge, mascot/wordmark and the referral end card come from make.fun's
  press pack (https://make.fun/press/manifest.json), fetched at build time and
  used exactly as provided; the only edit is the referral code typed into the
  card's field, as the press pack's own guide prescribes.
- Background, on-screen text and the music bed were all generated in the
  build session with ffmpeg; no third-party footage or audio.
- `BUILD-NOTES.md` records the creative decisions, the asset URLs fetched
  with their sha256 checks, and the render QC numbers.

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the bot
directory to the output directory, which is all the grader asks of it:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`VIDEO.json` names the TikTok video once it is posted; it ships with the
placeholder address until then.

## License

MIT — see `LICENSE`.
