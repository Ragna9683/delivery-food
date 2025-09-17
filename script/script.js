const modalFunc = () => {
    const modal = document.querySelector(".cart-modal__overlay");
    const cartBtn = document.querySelector("#cart-button");

    const openModal = () => {
        modal.classList.add("open");
    };

    const closeModal = () => {
        modal.classList.remove("open");
    };

    cartBtn.addEventListener('click', () => {
        openModal();
    });

    modal.addEventListener('click', (event) => {
        if (
            event.target.classList.contains("cart-modal__overlay") ||
            event.target.closest('.cart-modal__header--close')
        ) {
            closeModal();
        }
    });
};

const restsFunc = () => {
    const container = document.querySelector("#rests-container")

    const restArray = [
        {
            id: 0,
            title: "Пицца Плюс",
            time: 50,
            raiting: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'пицца плюс.jpg'
        },

          {
            id: 1,
            title: "Тануки",
            time: 50,
            raiting: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'Тануки.jpg'
        },

         {
            id: 2,
            title: "FoodBand",
            time: 50,
            raiting: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'FoodBand.jpg'
        },
         {
            id: 3,
            title: "Жадина-пицца",
            time: 50,
            raiting: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'Жадина-пицца.jpg'
        },
         {
            id: 4,
            title: "Точка еды",
            time: 50,
            raiting: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'точка еды.jpg'
        },
         {
            id: 5,
            title: "PizzaBurger",
            time: 50,
            raiting: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'PizzaBurger.jpg'
        },

          
    ]



    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align: center;">Загрузка...</p>'
    }

    const randerResrs = (array) => {
        container.innerHTML = ''

        array.forEach((card) => {
            contaioner.inserAdjacentHTML('beforeend', `
          <a href="./index copy.html?id=${card.id}" class="products-card">
                            <div class="products-card_image">
                                <img src="./fotos/rest/${card.image}" alt="${card.image}">
                            </div>
                            <div class="products-card_description">
                                <div class="products-card_description-row">
                                    <h4 class="products-card_description--title">${card.title}с</h4>
                                    <div class="products-card_description--bage">${card.time} мин</div>
                                </div>
                                <div class="products-card_description-row">
                                    <h4 class="products-card_description--title"></h4>
                                    <div class="products-card_description--bage"></div>
                                </div>
                                <div class="products-card_description--row">
                                    <div class="products-card_description-info">
                                        <div class="products-card_description-info--raiting">
                                            <img src="./fotos/ikons/star.svg" alt="">
                                            ${card.raiting}
                                        </div>
                                        <div class="products-card_description-info--prise">
                                            от ${card.price} ₽
                                        </div>
                                        <div class="products-card_description-info--group">
                                            ${card.type}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
        `)
        })
    }
    if (container) {
    loading()
    
    setTimeout(() => {
        randerResrs(restArray)
    }, 2000);
}
}

modalFunc()
restsFunc()
