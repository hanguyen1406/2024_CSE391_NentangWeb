//kieu xac dinh động theo giá trị của biến
let a=5;
a ="ahihi";
console.log(a)

//khai báo : const: khai báo biến; let var(nên dùng let)


//kiểu dữ liệu(string,number,null, undefiled,boolean)

// toán tử (== và ===) nên dùng ===

//cấu trúc rẽ nhánh

//5: mảng chấp nhận hỗn hợp kiểu giá trị
let myArr=["Chuỗi", 0, true, false];
console.log(myArr)

//6: cấu trúc lặp
for (const myArrElement of myArr){
    console.log(myArrElement)
}

//7: Hàm
function hamGiDo(){
    console.log("gi gi do")
}
hamGiDo();//ít dùng
//Hàm nặc danh
const square = function(x){
    return x*x;
}
console.log(square(8))

//Hàm mũi tên(arrow function)
const square2 = (x)=>{return x*x};
console.log(square2(9));

//callback function: hàm được truyền như 1 tham số trong hàm khác
const hamGiDo2 =(x,func) => {return func(x)};
console.log(hamGiDo2(x=9,square));

//8: Đối tượng
const student={
    name:"Sai Van Hieu",
    class:"64ktpm1",
    anyFunction:function(){
        console.log("anyMeth")
    }
    // anyFunction() => {console.log("ahihi")}
}

class Student{
    constructor(name,Class){
        this.name=name;
        this.Class=Class;
        console.log('hii');
    }
    ahi = () => {console.log(this.name + "...." + this.Class)};
}
const student02 = new Student( "Sai van hieu",  "hihaih");
student02.ahi();

