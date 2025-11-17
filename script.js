{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background: #f3f3f3;
}

header {
    background: #111;
    color: #fff;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 26px;
    font-weight: bold;
}

header input {
    width: 40%;
    padding: 8px;
    border-radius: 4px;
    border: none;
}

.buttons button {
    margin-left: 10px;
    padding: 8px 12px;
    background: #fff;
    color: #111;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.filters {
    display: flex;
    gap: 10px;
    padding: 15px;
    justify-content: center;
    background: #fff;
}

.products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    padding: 20px;
}

.product {
    background: #fff;
    padding: 10px;
    border-radius: 6px;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
    text-align: center;
}

.product img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 6px;
}

.product button {
    background: #111;
    color: #fff;
    border: none;
    padding: 8px 12px;
    margin-top: 8px;
    border-radius: 4px;
    cursor: pointer;
}

.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.hidden {
    display: none;
}

.popup-content {
    background: #fff;
    padding: 20px;
    border-radius: 6px;
    width: 300px;
    text-align: center;
}

#closePopup {
    float: right;
    cursor: pointer;
    font-size: 20px;
}
