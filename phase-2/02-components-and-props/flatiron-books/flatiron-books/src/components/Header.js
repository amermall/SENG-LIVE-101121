function Header(props) {
    console.log(props);
    return (
        <div>
            <h1>Header</h1>
            <h3>{props.storeName}</h3>
            <h3>{props.slogan}</h3>
        </div>
    );
}

export default Header