# test-bun-workspaces-fanout

Reproduction repo for sentinal-ub9f: bun monorepo with workspace fan-out
(`bun --filter '*' build`) — must keep the root `workspaces` field intact
in the Dockerfile or `--filter` resolves zero workspaces and exits ENOENT.

Mirrors the structure of Mosh Inc. PR 7226 / build 17839.
