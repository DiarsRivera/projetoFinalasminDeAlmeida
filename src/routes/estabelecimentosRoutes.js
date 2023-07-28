const express = require("express");
const router = express.Router();
const controller = require("../controllers/estabelecimentosControllers")

router.get("/pegar", controller.todosOsEstabelecimentos);
router.get("/pegar/:id", controller.pesquisarPorId);
router.post("/criar", controller.abriCadastro);
router.put("/update/:id", controller.updatePorId)
router.delete("/:id", controller.deletarCadastro)

module.exports = router