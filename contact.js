
export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    console.log("Message reçu:", name, email, message);
    res.status(200).json({ success: true, message: "Message envoyé avec succès !" });
  } else {
    res.status(405).json({ message: "Méthode non autorisée" });
  }
}
