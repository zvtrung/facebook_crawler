DATA = [
  {
    cookie: [{"name":"presence","value":"EDvF3EtimeF1527221223EuserFA21B26451870807A2EstateFDutF1527221223969CEchFDp_5f1B26451870807F0CC","domain":".facebook.com","path":"/","expires":-1,"size":103,"httpOnly":false,"secure":true,"session":true},{"name":"pl","value":"n","domain":".facebook.com","path":"/","expires":1534997220.041535,"size":3,"httpOnly":true,"secure":true,"session":false},{"name":"fr","value":"0aljyIQ7iICyILjBt.AWXkE1__G7_qfxSm6CzfPPrIRN8.BbB4vi.PN.AAA.0.0.BbB4vj.AWUi-v5N","domain":".facebook.com","path":"/","expires":1534997220.041463,"size":81,"httpOnly":true,"secure":true,"session":false},{"name":"xs","value":"36%3AMXPQguwHxwt4JQ%3A2%3A1527221220%3A-1%3A-1","domain":".facebook.com","path":"/","expires":1534997220.04138,"size":48,"httpOnly":true,"secure":true,"session":false},{"name":"datr","value":"4osHW0BGaWXAMH9zkKUjp6y8","domain":".facebook.com","path":"/","expires":1590293219.855797,"size":28,"httpOnly":true,"secure":true,"session":false},{"name":"c_user","value":"100026451870807","domain":".facebook.com","path":"/","expires":1534997220.041304,"size":21,"httpOnly":false,"secure":true,"session":false},{"name":"wd","value":"1200x1000","domain":".facebook.com","path":"/","expires":1527826023,"size":11,"httpOnly":false,"secure":true,"session":false},{"name":"sb","value":"4osHW0J3gq216U5RBCQtfKRx","domain":".facebook.com","path":"/","expires":1590293220.041113,"size":26,"httpOnly":true,"secure":true,"session":false}],
    agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36"
  },
  {
    cookie: [{"name":"presence","value":"EDvF3EtimeF1527221268EuserFA21B26417883567A2EstateFDutF1527221268445CEchFDp_5f1B26417883567F1CC","domain":".facebook.com","path":"/","expires":-1,"size":103,"httpOnly":false,"secure":true,"session":true},{"name":"pl","value":"n","domain":".facebook.com","path":"/","expires":1534997265.238306,"size":3,"httpOnly":true,"secure":true,"session":false},{"name":"fr","value":"02hB9aMYFmc28i9ID.AWVB5EmPM2_rn2jUX-ZtcdnuRHw.BbB4wN.Cs.AAA.0.0.BbB4wQ.AWUEO5TS","domain":".facebook.com","path":"/","expires":1534997265.238222,"size":81,"httpOnly":true,"secure":true,"session":false},{"name":"xs","value":"33%3AeDTT_PhGCFt8EA%3A2%3A1527221264%3A-1%3A-1","domain":".facebook.com","path":"/","expires":1534997265.23817,"size":48,"httpOnly":true,"secure":true,"session":false},{"name":"datr","value":"DYwHW0hXqpcWH4LaB1wAKuXv","domain":".facebook.com","path":"/","expires":1590293265.237805,"size":28,"httpOnly":true,"secure":true,"session":false},{"name":"c_user","value":"100026417883567","domain":".facebook.com","path":"/","expires":1534997265.238093,"size":21,"httpOnly":false,"secure":true,"session":false},{"name":"wd","value":"1200x1000","domain":".facebook.com","path":"/","expires":1527826067,"size":11,"httpOnly":false,"secure":true,"session":false},{"name":"sb","value":"DYwHWyiR0awGp-yevfINuHka","domain":".facebook.com","path":"/","expires":1590293265.238051,"size":26,"httpOnly":true,"secure":true,"session":false}],
    agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.1 Safari/605.1.15"
  },
  {
    cookie: [{"name":"presence","value":"EDvF3EtimeF1527221378EuserFA21B26267297931A2EstateFDutF1527221377506CEchFDp_5f1B26267297931F0CC","domain":".facebook.com","path":"/","expires":-1,"size":103,"httpOnly":false,"secure":true,"session":true},{"name":"pl","value":"n","domain":".facebook.com","path":"/","expires":1534997373.770858,"size":3,"httpOnly":true,"secure":true,"session":false},{"name":"fr","value":"0j0n6IBXjtwaJe2BW.AWU6_tRl9vbYonKXzI8gclTY7QA.BbB4x7.Ql.AAA.0.0.BbB4x9.AWU8Mc_W","domain":".facebook.com","path":"/","expires":1534997373.770805,"size":81,"httpOnly":true,"secure":true,"session":false},{"name":"xs","value":"35%3AQilEnrIvxcP18g%3A2%3A1527221373%3A-1%3A-1","domain":".facebook.com","path":"/","expires":1534997373.770712,"size":48,"httpOnly":true,"secure":true,"session":false},{"name":"datr","value":"e4wHWz0rMzxylo_AcPJTLo1e","domain":".facebook.com","path":"/","expires":1590293373.770279,"size":28,"httpOnly":true,"secure":true,"session":false},{"name":"c_user","value":"100026267297931","domain":".facebook.com","path":"/","expires":1534997373.770669,"size":21,"httpOnly":false,"secure":true,"session":false},{"name":"wd","value":"1200x1000","domain":".facebook.com","path":"/","expires":1527826177,"size":11,"httpOnly":false,"secure":true,"session":false},{"name":"sb","value":"e4wHW6NK25jzvVdpSZf2nGsw","domain":".facebook.com","path":"/","expires":1590293373.770587,"size":26,"httpOnly":true,"secure":true,"session":false}],
    agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:59.0) Gecko/20100101 Firefox/59.0"
  }
];


module.exports.getCookieInfo = (index = 0) => {
  return [(index + 1) % 3, DATA[index]];
}