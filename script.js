class Area {
    constructor(width_, height_, shape_) {
        this.shape = shape_;
        this.width = width_;
        this.hight = height_;
    }

    getArea() {
        // return this.width * this.hight;
        return (this.shape == 'Circle') ? Math.PI * Math.pow(this.hight, 2) : (this.hight * this.width); // New Form :D IF Statement Condition 
    }

    getAreaInfo() {
        return `The area of ${this.shape} is equal to ${this.getArea()}`;
    }
}

class Square extends Area {
    constructor(x) {
        super(x, x, 'square');
    }
}

class Rectangle extends Area {
    constructor(x, y) {
        super(x, y, 'Rectangle');
    }
}

class Circle extends Area {
    constructor(r) {
        super(r, r, "Circle");
    }
}
