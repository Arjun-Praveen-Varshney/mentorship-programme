export default async function handler(req, res) {
  const doc = req.body;

  // client.createIfNotExists(doc).then(() => {
  res.status(200).json("Login successful");
  // });
}
