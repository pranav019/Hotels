const express = require("express");
const router = express.Router();

const MenuCardItems = require("../models/Menu");

router.post("/admin_menu", async (req, res) => {
  try {
    const menuItemData = req.body;
    // Create a new menu item using the Mongoose model
    const menuItem = new MenuCardItems(menuItemData);
    // Save the new menu item to the database
    const menu_data = await menuItem.save();
    console.log("Menu item saved");
    res.status(200).json(menu_data);
  } catch (error) {
    console.error("Error creating menu item:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//2 menu items
router.get("/restraunt_menu", async (req, res) => {
  try {
    const menuItems = await MenuCardItems.find();
    res.status(200).json(menuItems);
  } catch (error) {
    console.log(error);
    res.status(500).json({ "Internal server error: ": error });
  }
});

module.exports = router;
