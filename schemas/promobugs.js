var promobugs = {
  url: 'http://www.promobugs.com.br/forums/promocoes.4',
  listItemQuery: '.discussionListItem',
  title: { 
    query: 'div.listBlock.main > div > h3 > a.PreviewTooltip',
  },
  link: {
    query: 'div.listBlock.main > div > h3 > a.PreviewTooltip',
    attr: 'href'
  },
  date: {
    query: 'div.listBlock.main > div > div > div.posterDate.muted > span > a > abbr',
    attr: 'data-time'
  }
};

module.exports = promobugs;
