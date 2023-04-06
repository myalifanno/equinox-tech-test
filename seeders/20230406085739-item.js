'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Items', [{
      brandIMG:'https://images.buyersguide.org/tr:if-w_gt_168,w-168,if-end/images/864/brand_468_63e27dda6ff0ddownload%20(1).png',
      itemIMG:'https://images.buyersguide.org/tr:if-w_gt_168,w-168,if-end/images/26975444/product_44457962_6299081eac142415eQISdtGL._SL500_.jpeg',
      name:'Hathaspace HSP003 Air Purifier',
      description:'The Hathaspace HSP003 Air Purifier can remove up to 99.9 percent of air pollutants from a big room or home. It can remove allergens from your air, as well as viruses, bacteria, and smoke.',
      coverage:'2800 sq ft in 1 hour',
      particleRemoval:'99.9% down to 0.25 microns',
      filterType:'H13 True HEPA',
      dimensions:'26.97" wide x 14.02" deep x 14.02" tall',
      effectiveFor:'Allergens, dust, odors, smoke, viruses, VOCs',
      rating:'9.9',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Items', null, {})
  }
};
