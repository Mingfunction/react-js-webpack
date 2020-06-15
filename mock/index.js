const proxy = {
  "GET /mock": { id: 1, sex: "1" },
  "POST /mock/login": (req, res) => {
    console.log(req.body);
    const { pwd, user } = req.body;
    if (pwd === "888888" && user === "admin") {
      return res.send({
        code: 200,
        status: "ok",
        data: { id: 1, user: "aaa" },
      });
    } else {
      return res.send({ status: "error", code: 403 });
    }
  },
};

module.exports = proxy;
