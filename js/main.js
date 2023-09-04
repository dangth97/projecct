/* Smooth scrool */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

/* Get products from json file */
fetch('data-store/trendingproductsFeatured.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var productsContainer = document.getElementById('owl1');
        data.forEach(function (product) {
            var productHTML = `<div class="product-layouts">
                                    <div class="product-thumb">
                                        <div class="image zoom">
                                            <a href="#">
                                                <img src="${product.mainImage}" alt="01" height="501" width="385"/>
                                                <img src="${product.mainImage}" alt="02" class="second_image img-responsive" height="501" width="385"/>
                                            </a>
                                        </div>
                                        <div class="thumb-description">
                                            <div class="caption">
                                                <h4 class="product-title text-capitalize">
                                                    <a href="#">
                                                        ${product.name}
                                                    </a>
                                                </h4>
                                            </div>
                                            <div class="rating">
                                                <div class="product-ratings d-inline-block align-middle">
                                                    <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                                    <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                                    <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                                    <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                                    <span class="fa fa-stack"><i class="material-icons">star</i></span>
                                                </div>
                                            </div>
                                            <div class="price">
                                                <div class="regular-price">${product.regularPrice}</div>
                                                <div class="old-price">${product.oldPrice}</div>
                                            </div>
                                            <div class="button-wrapper">
                                                <div class="button-group text-center">
                                                    <button type="button" class="btn btn-primary btn-cart" data-target="#cart-pop" data-toggle="modal" disabled="disabled">
                                                        <i class="material-icons">shopping_cart</i>
                                                        <span>Add to cart</span>
                                                    </button>
                                                    <button type="button" class="btn btn-primary btn-quickview" data-toggle="modal" data-target="#product_view">
                                                        <i class="material-icons">visibility</i>
                                                        <span>Quick View</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
            // productsContainer.insertAdjacentHTML('beforeend', productHTML);
        })
    });