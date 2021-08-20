/* 5. Rectangle Intersection

Write a function that expects two rectangles and returns the intersected rectangle (if any).

Each rectangle is represented by two points in a two dimensional space.

For example: [1, 1] and [4, 3]. Is the rectangle with point the corners at [1, 1], [4, 1], [1, 3] and [4, 3].

intersect([[1, 1], [4, 3]], [[2, 2], [6, 7]]); // => [2, 2], [4, 3]
intersect([[2, 1], [4, 4]], [[1, 1], [8, 8]]); // => [2, 1], [4, 4] */


const intersect = (rect1,rect2)=>{
    const r1 = {x:rect1[0][0],
        y:rect1[0][1],
        w:rect1[1][0]-rect1[0][0],
        h:rect1[1][1]-rect1[0][1]
    }
    const r2 = {x:rect2[0][0],
        y:rect2[0][1],
        w:rect2[1][0]-rect2[0][0],
        h:rect2[1][1]-rect2[0][1]
    }    

    let x=Math.max(r1.x,r2.x);
    let y=Math.max(r1.y,r2.y);
    let xx=Math.min(r1.x+r1.w,r2.x+r2.w);
    let yy=Math.min(r1.y+r1.h,r2.y+r2.h);
    return [[x,y],[xx,yy]];
    
}

console.log(intersect([[1, 1], [4, 3]], [[2, 2], [6, 7]])); // => [2, 2], [4, 3]
console.log(intersect([[2, 1], [4, 4]], [[1, 1], [8, 8]])); // => [2, 1], [4, 4] 

