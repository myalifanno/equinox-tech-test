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
    await queryInterface.bulkInsert('Items', [
      {
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
      },
      {
        brandIMG:'https://images.buyersguide.org/tr:if-w_gt_168,w-168,if-end/images/864/brand_468_63e27dda6ff0ddownload%20(1).png',
        itemIMG:'https://images.buyersguide.org/tr:if-w_gt_168,w-168,if-end/images/0819753/product_3579180_60ca337a8155f31zySoO3TFL._SL500_.jpeg',
        name:'Hathaspace 2.0 Smart True HEPA Air Purifier',
        description:'If you are looking for a medical-grade air purifier to target dust, pollen, tobacco smoke, and pet dander, Hathaspace HEPA 2.0 is your best bet.',
        coverage:'1,500 sq ft in 1 hour',
        particleRemoval:'99.9% down to 0.1 microns',
        filterType:'H13 True HEPA',
        dimensions:'16.5" wide x 9.5" deep x 27.2" tall',
        effectiveFor:'Allergens, dust, odors, smoke, viruses, VOCs',
        rating:'9.7',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brandIMG:'https://images.buyersguide.org/tr:if-w_gt_168,w-168,if-end/images/198453/brand_354891_6419ce314a290215ca64012a51282351804aca69dcc09.w2553.h659._CR0,0,2553,659_SX200_.png',
        itemIMG:'https://images.buyersguide.org/tr:if-w_gt_168,w-168,if-end/images/30872808/product_product_image_80827803_6408ba5d3fa7541mVf0BnEJL._SL500_.jpeg',
        name:'WELOV Air Purifier',
        description:'The WELOV Air Purifier can quietly remove impurities like pet hair, dust, pollen, and smoke from a large room in just one hour by using a three-stage filter.',
        coverage:'1077 sq ft in 1 hour',
        particleRemoval:'99.97% down to 0.3 microns',
        filterType:'HEPA',
        dimensions:'11" deep x 11" wide x 21" tall',
        effectiveFor:'Pet hair, pet dander, pollen, dust, smoke and odor',
        rating:'9.5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brandIMG:'https://images.buyersguide.org/tr:if-w_gt_168,w-168,if-end/images/33/brand_33_60c25c3c96f70levoit.png',
        itemIMG:'https://images.buyersguide.org/tr:if-w_gt_168,w-168,if-end/images/0123/reviewmerchant_3210_levoit%20core%20300.jpg',
        name:'Levoit Core 300 Air Purifier',
        description:'The Levoit Core 300 air purifier is a highly innovative machine that features VortexAir technology and H13 True HEPA filtration to effectively purify indoor air in spaces up to 1,095 sq ft.',
        coverage:'547 sq ft in 30 minutes',
        particleRemoval:'99.97% down to 0.3 microns',
        filterType:'H13 True HEPA',
        dimensions:'8.7" diameter x 14" tall',
        effectiveFor:'Allergens, pollen, odors, smoke',
        rating:'9.6',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brandIMG:'https://images.buyersguide.org/tr:if-w_gt_168,w-168,if-end/images/5/brand_5_60ad1eff49eaashark-logo-new.png',
        itemIMG:'https://images.buyersguide.org/tr:if-w_gt_168,w-168,if-end/images/52236426/product_product_image_62463225_63ee7c13c53f331gPmPq8Q2L._SL500_.jpeg',
        name:'Shark HP201 Air Purifier',
        description:'The Shark HP201 air purifier is a premium quality, intelligent, and powerful machine that provides fast and efficient purification for areas up to 1,000 sq ft.',
        coverage:'1,000 sq ft in 1 hour',
        particleRemoval:'99.98% down to 0.2 microns',
        filterType:'True HEPA',
        dimensions:'10.8" diameter x 22.5" tall',
        effectiveFor:'Allergens, dust, dander, mold, smoke. odors',
        rating:'9.1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brandIMG:'https://images.buyersguide.org/tr:if-w_gt_168,w-168,if-end/images/469013/brand_310964_6418a9de43d4aganizalogo.png',
        itemIMG:'https://images.buyersguide.org/tr:if-w_gt_168,w-168,if-end/images/213901811/product_product_image_118109312_642aea9268240ga.jpeg',
        name:'Ganiza Air Purifier',
        description:'Air purifiers are handily portable devices that combine the power of an internal filter (though, there are air purifier models without filters as well) with a fan to remove unwanted particles from the air in a designated room.',
        coverage:'1,077 sq ft in 1 hour',
        particleRemoval:'99.97% down to 0.3 microns',
        filterType:'H13 HEPA',
        dimensions:'9.6" wide x 10" deep x 18.6" tall',
        effectiveFor:'Allergens ,dust, dander, smoke, mold, VOCs, and more',
        rating:'9.3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
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
