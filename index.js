let dom = document.querySelector('#root');
    let element = React.createElement(
        'p', {}, 'Hello React!'
    )
    ReactDOM.render(element, dom)
    for (let i = 1; i < 4; i++){
        console.log(i);
    }