const
  vec = u => Array.isArray(u) ? u : [u, u],
  add = (u, v) => vec(v).map((vv, i) => vv + u[i]),
  sub = (u, v) => vec(v).map((vv, i) => vv - u[i]),
  mul = (u, v) => vec(v).map((vv, i) => vv * u[i]),
  div = (u, v) => vec(v).map((vv, i) => vv / u[i]),
  dot = (u, v) => mul(u, v).reduce((a, vv) => a + vv, 0),
  dotSqr = u => Math.sqrt(dot(u, u)),
  norm = u => div(u, dotSqr(u)),
  dist = (u, v) => norm(sub(u, v))
