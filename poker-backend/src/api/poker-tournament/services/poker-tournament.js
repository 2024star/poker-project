'use strict';

/**
 * poker-tournament service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::poker-tournament.poker-tournament');
