const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

try{
  const r = await axios.put(
    'https://api.chatengine.io/users/',
    {username: username, secret: username, first_name: username},
    {headers: {"private-key": "18d477c8-66e9-4416-8b0f-2252cafc5a90"}}
    ) 
    return res.status(r.status).json(r.data)
    } catch (e) {
        return res.status(e.respone.status).json(e.respone.data)
    }
  
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);