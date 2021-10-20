const currentDate = new Date();
currentDate.toISOString();

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('Article', [
      {
        id: 1,
        createdAt: currentDate,
        nickName: 'Reuters',
        title: 'Tesla urges PMO to cut import taxes before its foray in Indian market',
        content:
          "Tesla executives, including its head of policy in India, Manuj Khurana, took the company's demands to Modi's officials last month in a closeddoor meeting."
      },
      {
        id: 2,
        createdAt: currentDate,
        nickName: 'Patrick Campanale',
        title: 'Use this 20V cordless electric leaf blower to clean up this fall at $68, more in New Green Deals',
        content:
          'Now that fall is in full swing, your yard might be full of leaves. If that’s the case, a blower can help make light work of a tough chore. Today’s deal is perfect for the task, as it lets you blow away the leaves for just $68, no gas or oil required. Plus, yo…'
      },
      {
        id: 3,
        createdAt: currentDate,
        nickName: 'Michael Wayland',
        title: 'UAW tells members to urge Congress to back unionmade EVs in the U.S.',
        content:
          'The proposed $4,500 tax credit has drawn the ire of Toyota, Honda and other automakers that domestically produce vehicles with nonorganized workers.'
      },
      {
        id: 4,
        createdAt: currentDate,
        nickName: 'Reuters',
        title: "Tesla lobbies PM Modi's office to slash taxes before it enters market: Report",
        content: 'Tesla wants to begin selling imported cars in India this year but says taxes in the country are among the highest in the world'
      },
      {
        id: 5,
        createdAt: currentDate,
        nickName: 'Michael Wayland',
        title: "Tesla lobbies Modi's office in India to slash taxes before it enters marketsources",
        content:
          'Tesla Inc <a href="https://www.reuters.com/companies/TSLA.O" target="_blank">(TSLA.O)</a> has urged Indian Prime Minister Narendra Modi\'s office to slash import taxes on electric vehicles before it enters the market, four sources told Reuters, ratcheting up d…'
      },
      {
        id: 6,
        createdAt: currentDate,
        nickName: 'Aditi Shah and Aditya Kalra',
        title: "Tesla lobbies Modi's office in India to slash taxes before it enters marketsources",
        content:
          "Tesla Inc has urged Indian Prime Minister Narendra Modi's office to slash import taxes on electric vehicles before it enters the market, four sources told..."
      },
      {
        id: 7,
        createdAt: currentDate,
        nickName: 'Niloofer Shaikh',
        title: 'American Airlines Q3 Earnings Preview: What to expect with rise in domestic leisure travels?',
        content:
          'American Airlines (AAL) is scheduled to announce Q3 earnings results on Thursday, October 21st, before market opens.The consensus EPS Estimate is $1.03 (+81.4% Y/Y) and the...'
      },
      {
        id: 8,
        createdAt: currentDate,
        nickName: 'Rabab AlSharif',
        title: 'Deadly 2017 Crash Involving Former ADTR Bassist Comes to Light',
        content: 'Former ADTR bassist Josh Woodard was involved in a 2017 crash that left another man dead. Continue reading…'
      },
      {
        id: 9,
        createdAt: currentDate,
        nickName: 'mayaleo',
        title:
          'Take That, Bezos! Morgan Stanley Predicts Elon Musk Will Become A TRILLIONAIRE With Exponential Growth Of SpaceX, Which Currently Makes Up Less Than 17% Of His $241.4 Billion Net Worth',
        content:
          "Elon Musk, who recently supplanted his galactic rival Jeff Bezos as the world's richest man, will add another bragging right over the Amazon founder as financial experts predict the Tesla boss will become the first trillionaire due to the exponential growth o…"
      },
      {
        id: 10,
        createdAt: currentDate,
        nickName: 'mayaleo',
        title: 'Fund advisor presses EV startup Rivian on environment, human rights ahead of IPO',
        content:
          "A unionaffiliated pension fund advisor said it is pressing Rivian on human rights and environment concerns in the electric vehicle startup's battery supply chain ahead of its expected blockbuster initial public offering."
      },
      {
        id: 11,
        createdAt: currentDate,
        nickName: 'Diana Tsai, Contributor, \n Diana Tsai, Contributor\n https://www.forbes.com/sites/dianatsai/',
        title: 'How Better.Com Quietly Became A $7.7B Unicorn: Personal Insights From Founder Vishal Garg',
        content:
          'Vishal Garg is the Founder and Chief Executive Officer at Better, a digitalfirst homeownership company, and the leading noncommissioned mortgage provider in America. Better has raised over $400M since its inception and is currently valued at $7.7B.'
      },
      {
        id: 12,
        createdAt: currentDate,
        nickName: 'Ben Klayman',
        title: 'Fund advisor presses EV startup Rivian on environment, human rights ahead of IPO',
        content:
          "A unionaffiliated pension fund advisor said it is pressing Rivian on human rights and environment concerns in the electric vehicle startup's battery supply ..."
      },
      {
        id: 13,
        createdAt: currentDate,
        nickName: 'feedfeeder',
        title: 'Tesla Cybertruck will include removable side mirrors, Elon Musk says  Roadshow',
        content: "The Cybertruck concept didn't include any side mirrors at all, but as Musk notes, they are required by US federal law."
      },
      {
        id: 14,
        createdAt: currentDate,
        nickName: 'Daniel Ren, Daniel Ren',
        title: 'Geely’s Lynk & Co car brand launches midsize SUV, heads to Saudi Arabia and Kuwait',
        content:
          'Lynk & Co, a midrange car brand spawned out of Geely’s takeover of Volvo Cars, launched a midsize SUV to take on bestselling electric vehicle models assembled by Tesla and Chinese startup NIO.The ChineseSwedish carmaker, which is wellestablished in Europ…'
      },
      {
        id: 15,
        createdAt: currentDate,
        nickName: 'Luke Tsai',
        title: 'San Jose Is the Bay Area’s Great Immigrant Food City',
        content: 'There’s no better place in the Bay to sample all of the region’s diverse immigrant cuisines.'
      },
      {
        id: 16,
        createdAt: currentDate,
        nickName: 'Larry Light',
        title: 'New ETF Portends Bitcoin Reaching $160,000, Says Strategist Tom Lee',
        content: 'The top cryptocurrency has had a fresh growth spurt, as news of the new fund spreads.'
      },
      {
        id: 17,
        createdAt: currentDate,
        nickName: 'Steven J. VaughanNichols',
        title: "SpaceX will make Elon Musk the world's first trillionaire",
        content: "Love him or hate him, between Tesla and SpaceX, Morgan Stanley predicts Musk will eventually be the world's first trillionaire."
      },
      {
        id: 18,
        createdAt: currentDate,
        nickName: 'Bob Sechler and Kara Carlson',
        title: 'Seemingly an odd couple, Tesla and Texas becoming tightly entwined',
        content:
          "It seems like an unlikely marriage: Tesla, the world's biggest electric automaker, moving its headquarters to Texas—where the oil and gas industry is etched in the state's DNA and where, unless something changes, Tesla isn't even allowed to sell its vehicles …"
      },
      {
        id: 19,
        createdAt: currentDate,
        nickName: 'Phoebe Wall Howard',
        title: "How a simple box design is saving the auto industry millions of dollars: 'It's amazing'",
        content: 'This is a story about a box.'
      },
      {
        id: 20,
        createdAt: currentDate,
        nickName: 'Gina Martinez',
        title: 'Morgan Stanley predicts Elon Musk will become a trillionaire with exponential growth of SpaceX',
        content:
          'Financial experts are predicting that Elon Musk will become a a trillionaire with the exponential growth of SpaceX after he surpassed Jeff Bezos as the richest man in the world.'
      }
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Article', [
      {
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3
      },
      {
        id: 4
      },
      {
        id: 5
      },
      {
        id: 6
      },
      {
        id: 7
      },
      {
        id: 8
      },
      {
        id: 9
      },
      {
        id: 10
      },
      {
        id: 11
      },
      {
        id: 12
      },
      {
        id: 13
      },
      {
        id: 14
      },
      {
        id: 15
      },
      {
        id: 16
      },
      {
        id: 17
      },
      {
        id: 18
      },
      {
        id: 19
      },
      {
        id: 20
      }
    ]);
  }
};