import prisma from "../../lib/prisma";
export default async function handler(req, res) {
  const body = req.body;

  //console.log("body: ", body);

  let giveninput = body.inputnum;
  if (!giveninput) {
    return res.status(400).json({ data: "Input number not found" });
  }

  const fibo = await prisma.fibonacci.findFirst({
    where: {
      num: Number(giveninput),
    },
  });
  if (!fibo) {
    let fibo = [];
    let n1 = 0,
      n2 = 1,
      nextTerm;
    for (let i = 1; i <= giveninput; i++) {
      fibo.push(n1);
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
    }
    let series = fibo.join(", ");
    const newrecord = await prisma.fibonacci.create({
      data: {
        num: giveninput,
        Value: series,
      },
    });
    // res.status(200).json({
    //   data: `${newrecord.Value} ${newrecord.createdAt} ${newrecord.id} ${newrecord.num}`,
    // });
  }
  res.redirect(`/fibonacci/${giveninput}`);
}
