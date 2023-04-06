import { question } from "readline-sync";
// Biến lưu trữ dữ liệu để sử dụng cho thuật toán 
let count: number = 0;            // lượt chơi 
let milliseconds: number = 1000;  // thời gian hiển thị dãy số 
const len: number = 5;            // số lượng số trong 1 dãy
let message: string = '';         // lưu kết quả  
let min: number = 0;              // khoảng random số nhỏ nhất
let max: number = 9               // khoảng random số lớn nhất
let a: number[] = [];             // lưu mảng dãy số random
let b: number[] = [];             // lưu mảng dãy số người dùng nhập
let flag: boolean = true;         // Đặt cờ chiến thắng, nếu "cờ = false" sẽ kết thúc trò chơi
let result: boolean = true;      // Kết quả khi kiểm tra dãy số 


/**
 * Thực hiện chức năng hàm tiếp tục chơi game
 */
function main(): void {
    let result_end: string = gameContinue();
    console.log(result_end);
}
main();



/**
 * Thực hiện chơi và tiếp tục chơi nếu thắng thì dừng lại lượt thứ 5
 * @returns Kết quả chơi
 */
function gameContinue(): string {
    // Lặp lặp vòng chơi nếu chơi thắng và tới vòng 5 thì dừng
    do {
        if (count == 5) {                      // Nếu vòng thứ 5 mà thắng kết thúc trò chơi
            message = "Siêu trí nhớ";
            break;
        }

        count++;                               // tăng lượt chơi 
        console.log('Lượt chơi thứ', count)    // thông báo lượt chơi hiện tại

        flag = display();                      // kết quả lượt chơi dựa vào hàm display();

    } while (flag == true);                    // điều kiện để tiếp tục chơi


    if (flag == false)                          // Kiểm tra nếu biến cờ thua thì xuất thông báo
        message = "Game Over";

    return message;
}



/**
 * Hàm random dãy số, nhập dãy số và gọi hàm kiểm tra 2 dãy số
 * @returns Kết quả kiểm tra 2 dãy số 
 */
function display(): boolean {

    a = random(len);            // gán dãy số random cho mảng a 
    console.log(a);             // guất ra dãy số
    sleep(milliseconds);        // gọi hàm ẩn dãy số 
    console.clear();            // Xóa dãy số random 
    milliseconds += 1000;       // Tăng số mili giây hiển thị sau mỗi lượt chơi

    b = nhapMang(len);          // Nhập dãy số cho mảng b 

    result = check_Number(a, b);// kết quả của hàm kiểm tra dãy số 

    return result;
}



/**
 * Hàm Random dãy số trong khoảng [min,max]
 * @param len số lượng số trong mảng
 * @returns Dãy số random
 */
function random(len: number): number[] {

    // Gán từng phần tử bằng số random
    for (let i = 0; i < len; i++) {
        a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    if (min == 0) // vòng tiếp theo thay đổi min để tăng chữ số lên
        min = 1;

    // Tăng khoảng số lượng chữ số sau mỗi vòng chơi
    min = (min * 10 + 9)
    max = (max * 10 + 9);

    return a;
}


/**
 * Hàm nhập mảng
 * @param len số lượng số trong mảng
 * @returns dãy số dùng nhập
 */
function nhapMang(len: number): number[] {

    for (let i = 0; i < len; i++) {
        b[i] = Number(question(`Nhap so thu ${i + 1}: `));
    }

    return b;
}


/**
 * Hàm kiểm tra 2 dãy số có giống nhau không
 * @param a dãy số random
 * @param b dãy số người dùng nhập
 * @returns trả về TRUE nếu 2 dãy số giống , ngược lại là FALSE
 */
function check_Number(a: number[], b: number[]): boolean {

    for (let i = 0; i < len; i++) {

        if (a[i] != b[i])
            result = false;

    }

    return result;
}



/**
 * Hàm xóa màn hình
 * @param milliseconds số mili giây
 */
function sleep(milliseconds: number): void {
    var start = new Date().getTime();
    while (new Date().getTime() - start < milliseconds) { }
}








