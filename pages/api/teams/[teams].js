import { menuteam } from "@/data";

export default function handler(req, res) {
    const teamName = req.query.teams;

    const team = menuteam.find((item) => item.name == teamName);

  res.status(200).json(team);
}
