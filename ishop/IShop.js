const IShop = React.createClass({

    displayName: 'IShop',

    propTypes: {
        name: React.PropTypes.string,
        items: React.PropTypes.array,
    },

    render: function () {
        const shopItems = [];
        this.props.items.forEach(element => {
            let shopItem = React.DOM.tr({ key: element.key },
                React.DOM.td(null, React.DOM.img({ src: element.link, alt: "", width: "500px" })),
                React.DOM.td(null, element.name),
                React.DOM.td(null, element.price),
                React.DOM.td(null, `Left: ${element.quantity}`),
            )
            shopItems.push(shopItem);
        });

        return React.DOM.div({ className: 'shop-wrapper' },
            React.DOM.h1({ className: 'shop-name' }, this.props.name),
            React.DOM.table({ className: 'shop-items' },
                React.DOM.tbody(null, shopItems)),
        );
    }
})