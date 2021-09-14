const items = [
    {
        img: "https://m.media-amazon.com/images/I/31FuFxw5deL._SX466_.jpg",
        name: "cocooil",
        price: "30$",
    },
    {
        img: "https://images.unsplash.com/photo-1612547036242-77002603e5aa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9sYXJvaWQlMjBjYW1lcmF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
        name: "Polaroid",
        price: "60$",
    },
    {
        img: "https://www-pinkmelon-de.exactdn.com/wp-content/uploads/2017/09/maui-moisture-strength-and-anti-breakage-and-agave-conditioner-3.jpg?strip=all&lossy=1&ssl=1",
        name: "Maui Moisture",
        price: "20$",
    }
]

const SupershopItems = () => {

    return (
        <div className="flex">
            <Supershop img={items[0].img} name={items[0].name} price={items[0].price} />
            <Supershop img={items[1].img} name={items[1].name} price={items[1].price} />
            <Supershop img={items[2].img} name={items[2].name} price={items[2].price} />
        </div>
    );
}

export default SupershopItems;

const Supershop = (props) => {
    console.log(props)
    return (
        <article className="size">
            <img src={props.img}></img>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <button>BUY NOW</button>
        </article>
    );
}

