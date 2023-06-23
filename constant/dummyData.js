

import images from "./images"

const categories = [
    {
        id: 1,
        name: "Crispy and Flavorful Cutlet Recipe",
        image: "https://img.youtube.com/vi/lt0vN2GgtMA/mqdefault.jpg",
        duration: "4:34 mins ",
        isTrending: true,
        category: "Snacks",
        isBookmark: false,
        url: "https://www.youtube.com/watch?v=lt0vN2GgtMA",
        serving: 10,
        


    },
    {
        id: 2,
        name: "Flavorful Vegetable Pasta",
        image: "https://img.youtube.com/vi/vdkLNvBp5eY/mqdefault.jpg",
        duration: "8:38 mins ",
        isTrending: false,
        isBookmark: false,
        category: "Pasta",
        url: "https://www.youtube.com/watch?v=vdkLNvBp5eY",
        serving: 4,
        



    },
    {
        id: 3,
        name: "Delicious Potato-filled Pinwheels",
        image: "https://img.youtube.com/vi/nHWpKPm7riU/mqdefault.jpg",
        duration: "5:13 mins ",
        isTrending: true,
        isBookmark: true,
        category: "Snacks",
        url: "https://www.youtube.com/watch?v=nHWpKPm7riU",
        serving: 1,
        

    },
    {
        id: 4,
        name: "Crispy Chicken Donut Recipe",
        image: "https://img.youtube.com/vi/BL9O_lw7XRI/mqdefault.jpg",
        duration: "4:58 mins ",
        isTrending: true,
        isBookmark: true,
        category: "Snacks",
        url: "https://www.youtube.com/watch?v=BL9O_lw7XRI",
        serving: 1,
        

    },


    {
        id: 5,
        name: "Crunchy Pita Bites Recipe",
        image: "https://img.youtube.com/vi/m8Y_RAZL9UY/mqdefault.jpg",
        duration: "6:26 mins ",
        isTrending: true,
        isBookmark: false,
        category: "Snacks",
        url: "https://www.youtube.com/watch?v=m8Y_RAZL9UY",
        serving: 1,
        


    },
    {
        id: 6,
        name: "Authentic Mutton Karhai",
        image: "https://img.youtube.com/vi/Pyv8TeU1ShM/mqdefault.jpg",
        duration: "3:37 mins ",
        isTrending: true,
        isBookmark: false,
        category: "Desi",
        url: "https://www.youtube.com/watch?v=Pyv8TeU1ShM",
        serving: 1,
        

    },
    {
        id: 7,
        name: "Irresistible Crunchy Potato Balls",
        image: "https://img.youtube.com/vi/tKOTqzryfTs/mqdefault.jpg",
        duration: "7:29 mins ",
        isTrending: false,
        isBookmark: false,
        category: "Snacks",
        url: "https://www.youtube.com/watch?v=tKOTqzryfTs",
        serving: 1,
        

    },
    {
        id: 8,
        name: "Creamy Chicken White Karahi ",
        image: "https://img.youtube.com/vi/qdek9s_lvSI/mqdefault.jpg",
        duration: "2:17 mins ",
        isTrending: false,
        isBookmark: false,
        category: "Desi",
        url: "https://www.youtube.com/watch?v=qdek9s_lvSI",
        serving: 1,
        

    },
    {
        id: 9,
        name: "Creamy Fruit Custard ",
        image: "https://img.youtube.com/vi/hom5o07LUcY/mqdefault.jpg",
        duration: "5:25 mins ",
        isTrending: false,
        isBookmark: false,
        category: "Desert",
        url: "https://www.youtube.com/watch?v=hom5o07LUcY",
        serving: 1,
        

    },
    {
        id: 10,
        name: "Mutanjan",
        image: "https://img.youtube.com/vi/aDipqIS_K5Y/mqdefault.jpg",
        duration: "6:54 mins ",
        isTrending: false,
        isBookmark: false,
        category: "Desert",
        url: "https://www.youtube.com/watch?v=aDipqIS_K5Y",
        serving: 1,
        

    },
    {
        id: 11,
        name: "Crispy Fried Bread Roll ",
        image: "https://img.youtube.com/vi/W97BMrh35AU/mqdefault.jpg",
        duration: "4:14 mins ",
        isTrending: false,
        isBookmark: false,
        category: "Snacks",
        url: "https://www.youtube.com/watch?v=W97BMrh35AU",
        serving: 1,
        

    },
    {
        id: 12,
        name: "Authentic Bengan Ka Bharta",
        image: "https://img.youtube.com/vi/rT2OHnO-er4/mqdefault.jpg",
        duration: "4:14 mins ",
        isTrending: false,
        isBookmark: false,
        category: "Desi",
        url: "https://www.youtube.com/watch?v=rT2OHnO-er4",
        serving: 1,
        

    },
    {
        id: 13,
        name: "Creamy Cheesy Pasta",
        image: "https://img.youtube.com/vi/inpGTPPbQNU/mq3.jpg",
        duration: "7:09 mins ",
        isTrending: false,
        isBookmark: false,
        category: "Pasta",
        url: "https://www.youtube.com/watch?v=inpGTPPbQNU",
        serving: 1,
        

    },
    {
        id: 14,
        name: "Irresistible Chicken Shawarma",
        image: "https://img.youtube.com/vi/q_l1U6NS5_I/mq1.jpg",
        duration: "10:30 mins ",
        isTrending: false,
        isBookmark: false,
        category: "Snacks",
        url: "https://www.youtube.com/watch?v=q_l1U6NS5_I",
        serving: 1,
        

    },
    {
        id: 15,
        name: "Katori Chat",
        image: "https://img.youtube.com/vi/57FCCj2I_Lo/mq1.jpg",
        duration: "4:04 mins ",
        isTrending: false,
        isBookmark: false,
        category: "Desi",
        url: "https://www.youtube.com/watch?v=57FCCj2I_Lo",
        serving: 1,
        

    },
    {
        id: 16,
        name: "Crispy Homemade Chicken Nuggets",
        image: "https://img.youtube.com/vi/9UrBM-Bd5yk/mq1.jpg",
        duration: "6:05 mins ",
        isTrending: false,
        isBookmark: false,
        category: "Snacks",
        url: "https://www.youtube.com/watch?v=9UrBM-Bd5yk",
        serving: 1,
   
    },
    {
        id: 17,
        name: "Delicious Homemade Samosas",
        image: "https://img.youtube.com/vi/mpFkuRp1v7A/mqdefault.jpg",
        duration: "5:39 mins ",
        isTrending: false,
        isBookmark: false,
        category: "Snacks",
        url: "https://www.youtube.com/watch?v=mpFkuRp1v7A",
        serving: 1,
        

    },
    {
        id: 18,
        name: "Refreshing Strawberry Smoothie",
        image: "https://img.youtube.com/vi/uByiD_Z9smA/mq1.jpg",
        duration: "2:41 mins ",
        isTrending: false,
        isBookmark: false,
        category: "Drinks",
        url: "https://www.youtube.com/watch?v=uByiD_Z9smA",
        serving: 1,
        

    },
    {
        id: 19,
        name: "Crispy Fried Chicken",
        image: "https://img.youtube.com/vi/XHxzFxLBjCw/mqdefault.jpg",
        duration: "12:28 mins ",
        isTrending: false,
        isBookmark: false,
        category: "Snacks",
        url: "https://www.youtube.com/watch?v=XHxzFxLBjCw",
        serving: 1,
        

    },
    {
        id: 20,
        name: "Ultimate Chicken Biryani",
        image: "https://img.youtube.com/vi/O4N2KrlXw-0/mqdefault.jpg",
        duration: "6:06 mins ",
        isTrending: false,
        isBookmark: false,
        category: "Desi",
        url: "https://www.youtube.com/watch?v=O4N2KrlXw-0",
        serving: 1,
        
    },
    {
        id: 21,
        name: "Makki Roti and Walnut Chutney",
        image: "https://img.youtube.com/vi/W8Bnv3gV3wg/mqdefault.jpg",
        duration: "7:49 mins ",
        isTrending: false,
        isBookmark: false,
        category: "Desi",
        url: "https://www.youtube.com/watch?v=W8Bnv3gV3wg",
        serving: 1,
        

    },
    {
        id: 22,
        name: "Mint Margarita",
        image: "https://img.youtube.com/vi/IVhi_v0UBCY/mqdefault.jpg",
        duration: "3:08 mins ",
        isTrending: false,
        isBookmark: false,
        category: "Drinks",
        url: "https://www.youtube.com/watch?v=IVhi_v0UBCY",
        serving: 1,
        

    },

]




const trendingRecipes = [
    {
        id: 4,
        name: "Nasi Lemak",
        image:images.spagetti,
        duration: "1 hour ",
        isBookmark: true,
        category: "Local",
        url: "https://www.youtube.com/watch?v=W-Oqe8Ph_eM",
        serving: 18,

    },
    {
        id: 5,
        name: "Hamburger",
        image: images.laksa,
        duration: "1 hour ",
        isBookmark: false,
        category: "FastFood",
        url: "https://www.youtube.com/watch?v=W-Oqe8Ph_eM",
        serving: 15,

    },
    {
        id: 6,
        name: "Lasangna",
        image: images.lasangna,
        duration: "50 mins ",
        isBookmark: false,
        category: "FastFood",
        url: "https://www.youtube.com/watch?v=W-Oqe8Ph_eM",
        serving: 15,

    }
]

const allCategories=trendingRecipes.concat(categories)

export default {
    trendingRecipes,
    categories,
    allCategories
}
