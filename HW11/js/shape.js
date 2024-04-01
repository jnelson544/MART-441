class Shape
{
    constructor(x,y,w,h, color)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
    }

    setX(x)
    {
        this.x = x;
    }
    get X()
    {
        return this.x;
    }

    setY(y)
    {
        this.y = y;
    }

    get Y()
    {
        return this.y;
    }
    
    setWidth(w) 
    {
        this.w = w;
    }

    get Width()
    {
        return this.w;
    }

    setHeight(h) 
    {
        this.h = h;
    }

    get Height()
    {
        return this.h;
    }

    setColor(color)
    {
        this.color = color;
    }

    get Color()
    {
        return this.color;
    }

    drawRectangle()
    {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    drawInnerCircle()
    {
        //had to do some research to make a circle on canvas
        let diameter = Math.min(this.w, this.h) - 10; 
        ctx.beginPath();
        ctx.arc(this.x + this.w / 2, this.y + this.h / 2, diameter / 2, 0, Math.PI * 2);
        ctx.fillStyle = 'orange';
        ctx.fill();
        ctx.closePath();
    }
    drawShape()
    {
        this.drawRectangle();
        this.drawInnerCircle();
    }
}
