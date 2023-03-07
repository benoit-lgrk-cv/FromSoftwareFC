const express = require("express");
const { signUp } = require("../controllers/auth.controller");
const {
  getUsers,
  userInfo,
  updateUser,
  deleteUser,
  follow,
  unfollow
} = require("../controllers/user.controller");
const router = express.Router();

//s'enregistrer
router.post("/register", signUp);


//Voir les utilisateurs
router.get("/", getUsers);
//Voir un utilisateur
router.get("/:id", userInfo);
//Mise à jour d'un utilisateur
router.put("/:id", updateUser);
//Suppression d'un utilisateur
router.delete("/:id", deleteUser);
router.patch("/follow/:id", follow);
router.patch("/unfollow/:id", unfollow);

module.exports = router;
