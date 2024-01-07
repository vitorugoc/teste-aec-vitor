interface Review {
  author: string;
  text: string;
  rating: number;
}

interface Product {
    _id: string;
    name: string;
    image: string;
    price: number;
    rating: number;
    numReviews: number;
    description: string;
    reviews: Review[];
  }
  
  const products: Product[] = [
    {
      _id: "1",
      name: "Câmera Sony Compacta",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJhfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      price: 6850.00,
      rating: 4.5,
      numReviews: 12,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat tellus ac massa cursus, vel mollis ex lobortis. Sed ante enim, mattis eu efficitur in, facilisis quis nulla. Donec vestibulum eget quam eget volutpat. Sed odio magna, luctus vel interdum vel, feugiat id lacus. Vestibulum tellus ligula, venenatis non iaculis id, ultrices eget ante. Fusce consequat metus eu arcu bibendum, sed ultrices mi placerat. Nunc eu mauris pulvinar lacus pretium euismod. Etiam consequat imperdiet augue, in elementum nisl imperdiet ac. Curabitur sed mi quis sem eleifend vestibulum vitae in purus. In diam nisi, tincidunt in sem nec, consequat egestas quam. Nulla ultricies ipsum elit, ullamcorper pellentesque massa lacinia fringilla. Vestibulum placerat, massa et sodales congue, neque quam vulputate tellus, nec suscipit sapien neque id nibh. Sed dapibus molestie risus et finibus. Sed sit amet odio risus. Quisque rutrum dignissim metus vel semper.",
      reviews: [
        { author: "John Doe", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", rating: 3 },
        { author: "Jane Doe", text: "Duis molestie lobortis diam in mollis. Vivamus erat sapien.", rating: 4 },
      ],
    },
    {
      _id: "2",
      name: "Fone De Ouvido On-ear",
      image:
        "https://images.unsplash.com/photo-1585298723682-7115561c51b7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHBob25lc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      price: 150.99,
      rating: 0.5,
      numReviews: 8,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat tellus ac massa cursus, vel mollis ex lobortis. Sed ante enim, mattis eu efficitur in, facilisis quis nulla. Donec vestibulum eget quam eget volutpat. Sed odio magna, luctus vel interdum vel, feugiat id lacus. Vestibulum tellus ligula, venenatis non iaculis id, ultrices eget ante. Fusce consequat metus eu arcu bibendum, sed ultrices mi placerat. Nunc eu mauris pulvinar lacus pretium euismod. Etiam consequat imperdiet augue, in elementum nisl imperdiet ac. Curabitur sed mi quis sem eleifend vestibulum vitae in purus. In diam nisi, tincidunt in sem nec, consequat egestas quam. Nulla ultricies ipsum elit, ullamcorper pellentesque massa lacinia fringilla. Vestibulum placerat, massa et sodales congue, neque quam vulputate tellus, nec suscipit sapien neque id nibh. Sed dapibus molestie risus et finibus. Sed sit amet odio risus. Quisque rutrum dignissim metus vel semper.",
      reviews: [
        { author: "John Doe", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", rating: 3 },
        { author: "Jane Doe", text: "Duis molestie lobortis diam in mollis. Vivamus erat sapien.", rating: 4 },
      ],
    },
    {
      _id: "3",
      name: "iPhone XR 128GB",
      image:
        "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGlwaG9uZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      price: 2969.99,
      rating: 3,
      numReviews: 12,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat tellus ac massa cursus, vel mollis ex lobortis. Sed ante enim, mattis eu efficitur in, facilisis quis nulla. Donec vestibulum eget quam eget volutpat. Sed odio magna, luctus vel interdum vel, feugiat id lacus. Vestibulum tellus ligula, venenatis non iaculis id, ultrices eget ante. Fusce consequat metus eu arcu bibendum, sed ultrices mi placerat. Nunc eu mauris pulvinar lacus pretium euismod. Etiam consequat imperdiet augue, in elementum nisl imperdiet ac. Curabitur sed mi quis sem eleifend vestibulum vitae in purus. In diam nisi, tincidunt in sem nec, consequat egestas quam. Nulla ultricies ipsum elit, ullamcorper pellentesque massa lacinia fringilla. Vestibulum placerat, massa et sodales congue, neque quam vulputate tellus, nec suscipit sapien neque id nibh. Sed dapibus molestie risus et finibus. Sed sit amet odio risus. Quisque rutrum dignissim metus vel semper.",
      reviews: [
        { author: "John Doe", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", rating: 3 },
        { author: "Jane Doe", text: "Duis molestie lobortis diam in mollis. Vivamus erat sapien.", rating: 4 },
      ],
    },
    {
      _id: "4",
      name: "Controle DualSense",
      image:
        "https://images.unsplash.com/photo-1606318801954-d46d46d3360a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYXklMjBzdGF0aW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      price: 414.99,
      rating: 5,
      numReviews: 12,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat tellus ac massa cursus, vel mollis ex lobortis. Sed ante enim, mattis eu efficitur in, facilisis quis nulla. Donec vestibulum eget quam eget volutpat. Sed odio magna, luctus vel interdum vel, feugiat id lacus. Vestibulum tellus ligula, venenatis non iaculis id, ultrices eget ante. Fusce consequat metus eu arcu bibendum, sed ultrices mi placerat. Nunc eu mauris pulvinar lacus pretium euismod. Etiam consequat imperdiet augue, in elementum nisl imperdiet ac. Curabitur sed mi quis sem eleifend vestibulum vitae in purus. In diam nisi, tincidunt in sem nec, consequat egestas quam. Nulla ultricies ipsum elit, ullamcorper pellentesque massa lacinia fringilla. Vestibulum placerat, massa et sodales congue, neque quam vulputate tellus, nec suscipit sapien neque id nibh. Sed dapibus molestie risus et finibus. Sed sit amet odio risus. Quisque rutrum dignissim metus vel semper.",
      reviews: [
        { author: "John Doe", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", rating: 3 },
        { author: "Jane Doe", text: "Duis molestie lobortis diam in mollis. Vivamus erat sapien.", rating: 4 },
      ],
    },
    {
      _id: "5",
      name: "Macbook Air M1",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60",
      price: 7999.99,
      rating: 5,
      numReviews: 10,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat tellus ac massa cursus, vel mollis ex lobortis. Sed ante enim, mattis eu efficitur in, facilisis quis nulla. Donec vestibulum eget quam eget volutpat. Sed odio magna, luctus vel interdum vel, feugiat id lacus. Vestibulum tellus ligula, venenatis non iaculis id, ultrices eget ante. Fusce consequat metus eu arcu bibendum, sed ultrices mi placerat. Nunc eu mauris pulvinar lacus pretium euismod. Etiam consequat imperdiet augue, in elementum nisl imperdiet ac. Curabitur sed mi quis sem eleifend vestibulum vitae in purus. In diam nisi, tincidunt in sem nec, consequat egestas quam. Nulla ultricies ipsum elit, ullamcorper pellentesque massa lacinia fringilla. Vestibulum placerat, massa et sodales congue, neque quam vulputate tellus, nec suscipit sapien neque id nibh. Sed dapibus molestie risus et finibus. Sed sit amet odio risus. Quisque rutrum dignissim metus vel semper.",
      reviews: [
        { author: "John Doe", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", rating: 3 },
        { author: "Jane Doe", text: "Duis molestie lobortis diam in mollis. Vivamus erat sapien.", rating: 4 },
      ],
    },
    {
      _id: "6",
      name: "Apple Watch",
      image:
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjB3YXRjaHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      price: 2100.00,
      rating: 4,
      numReviews: 12,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat tellus ac massa cursus, vel mollis ex lobortis. Sed ante enim, mattis eu efficitur in, facilisis quis nulla. Donec vestibulum eget quam eget volutpat. Sed odio magna, luctus vel interdum vel, feugiat id lacus. Vestibulum tellus ligula, venenatis non iaculis id, ultrices eget ante. Fusce consequat metus eu arcu bibendum, sed ultrices mi placerat. Nunc eu mauris pulvinar lacus pretium euismod. Etiam consequat imperdiet augue, in elementum nisl imperdiet ac. Curabitur sed mi quis sem eleifend vestibulum vitae in purus. In diam nisi, tincidunt in sem nec, consequat egestas quam. Nulla ultricies ipsum elit, ullamcorper pellentesque massa lacinia fringilla. Vestibulum placerat, massa et sodales congue, neque quam vulputate tellus, nec suscipit sapien neque id nibh. Sed dapibus molestie risus et finibus. Sed sit amet odio risus. Quisque rutrum dignissim metus vel semper.",
      reviews: [
        { author: "John Doe", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", rating: 3 },
        { author: "Jane Doe", text: "Duis molestie lobortis diam in mollis. Vivamus erat sapien.", rating: 4 },
      ],
    },
  ];
  
export default products;
export type { Product };
  