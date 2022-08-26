const router = require("express").Router();
const ItensController = require("../controllers/itens")

router.get("/itens/:id?", ItensController.get);
router.post("/itens", ItensController.post);
router.put("/itens/:id", ItensController.put);
router.delete("/itens/:id", ItensController.remove);

module.exports = router