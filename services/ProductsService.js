const PRODUCTS = [
    {
        id: 1,
        name: "Collier cauri",
        price:150,
        image: require("../assets/product_images/collierp.webp"),
        description: " Collier ras du cou coquillages cauris"
        },
    
    {
        id: 2,
    name: "Collier boho fantaisie ",
    price:240,
    image: require("../assets/product_images/colboho.webp"),
    description: "Collier boho fantaisie multicolore avec pompons et coquillages"
    },
    
    {
    id: 3,
    // name: "Collier Berbère Bawttu",
    name: "Collier fantaisie tendance",
    price: 180,
    image: require("../assets/product_images/colfan.jpeg"),
    description: "Collier Fantaisie couleur doré sur ruban tressé beige. Pierres imitation multicolores tons marron"
    },
    {
    id: 4,
    name: "Collier 60cm Ambre",
    price: 360,
    image: require("../assets/product_images/cam.jpeg"),
    description: "Ravissant collier en ambre multicolore, collier style plastron qui se porte avec toutes les tenues."
    },
   
        {
            id: 5,
            name: "Collier tranche en ivoire  ",
            price:220,
            image: require("../assets/product_images/c1.jpg"),
            description: " Collier tranche en ivoire végétal noir et naturel"
            },
            
                {
                    id: 6,
                    name: "Collier ethniqu",
                    price: 324,
                    image: require("../assets/product_images/c6.jpg"),
                    description:"Collier ethnique multirangs perles fantaisie femme original.",
                },
                {
                    id: 7,
                    name: " Collier corail ",
                    price:399,
                    image: require("../assets/product_images/c2.jpg"),
                    description: "Collier en corail rouge véritable de méditérranée"
                    },


                    
                        {
                            id: 8,
                            name: "Collier de perles de riz ",
                            price: 130,
                            image: require("../assets/product_images/c5.webp"),
                            description:
                                " Collier de perles de riz colorées pour femme ",
                        },


                        {
                            id: 9,
                            name: "Collier népalais en argent",
                            price: 490,
                            image: require("../assets/product_images/colli2.jpg"),
                            description:
                                "Collier népalais en argent",
                        },


                        {
                            id: 10,
                            name: "Collier ras du cou",
                            price: 230,
                            image: require("../assets/product_images/c4.jpg"),
                            description:
                                "Collier ras du cou en plaqué or 9k qui se compose d’une chaîne et d’un pendentif serti d’une pierre jade carrée rose.",
                        },
                        // {
                        //     id: 1,
                        //     name: "Collier en ivoire",
                        //     price: 324,
                        //     image: require("../assets/product_images/coll2.jpg"),
                        //     description:
                        //       "Collier fantaisie fait mains, modèle unique avec pendentif noix de tagua et perles en ivoire végétal. Couleur marron.",
                        // },
]

export function getProducts(){
    return PRODUCTS;
}

export function getProduct(id){
    return PRODUCTS.find((product) => product.id == id);
}