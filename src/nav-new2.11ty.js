module.exports = {
  data() {
    return {
      layout: 'test',
    }
  },
  render({ page, nav }) {
    return `
<br />
<nav class="flow">
  <h2><span>new</span></h2>
  <nav class="pl-4">${nav.map( ea => `
    <h2${ ( page.url == `/${ea}/` ) ? ` class='active'` : '' }><a href="/${ ea }">${ ea }</a></h2>` ).join('')}
  </nav>
</nav>
`
  }
}
