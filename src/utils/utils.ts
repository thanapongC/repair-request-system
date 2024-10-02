
// import { Product } from "@/contexts/productServiceListContext";

// Function to calculate Tax
export const calculateTax = (totalPrice: number, vatRate: number, withholdingTaxPercent: number): { vatAmount: number; totalWithVAT: number; withholdingTaxAmount: number; totalAfterWithholdingTax: number } => {

    let vatAmount = 0;
    let totalWithVAT = totalPrice;

    // Calculate VAT if vatRate is greater than 0
    if (vatRate > 0) {
        vatAmount = totalPrice * vatRate;
        totalWithVAT = totalPrice + vatAmount;
    }

    let withholdingTaxAmount = 0;
    let totalAfterWithholdingTax = totalWithVAT;

    // Calculate Withholding Tax if withholdingTaxPercent is greater than 0
    if (withholdingTaxPercent > 0) {
        withholdingTaxAmount = totalWithVAT * (withholdingTaxPercent / 100);
        totalAfterWithholdingTax = totalWithVAT - withholdingTaxAmount;
    }

    return {
        vatAmount,
        totalWithVAT,
        withholdingTaxAmount,
        totalAfterWithholdingTax,
    };
}

// export const calculateFooterTotals = (products: Product[]): { totalPrice: number; totalDiscount: number; priceAfterDiscount: number } => {

//     // คำนวณผลรวมสำหรับ product
//     let totalPrice: number = 0;
//     let totalDiscount: number = 0;

//     products.map((product) => {
//         totalPrice += product.totalPrice;
//         totalDiscount += product.totalDiscount;
//     });

//     let priceAfterDiscount = totalPrice - totalDiscount;

//     return {
//         totalPrice,
//         totalDiscount,
//         priceAfterDiscount
//     }

// };


export function formatUtcDate(utcDateString?: string | null): string | null | undefined {

    if (!utcDateString) {
        return;
    }

    const utcDate = new Date(utcDateString);
    const formattedDate = utcDate.toLocaleDateString('th-TH',
        { day: '2-digit', month: 'long', year: 'numeric' });

    return formattedDate;
}

export function makeDateMonth(utcDateString?: string): string {

    if (!utcDateString) {
        return 'ไม่พบข้อมูล';
    }

    const utcDate = new Date(utcDateString);
    const month = String(utcDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so we add 1
    const year = String(utcDate.getFullYear()).slice(-2); // Get last two digits of the year

    return `${month}-${year}`;
}

export function formatNumber(number: number | null | undefined, needDecimal: boolean | null = true): string | null | undefined {
    if (number !== null && number !== undefined) {

        let fixedNumber: string | number;

        if (needDecimal) {
            fixedNumber = Number.isInteger(number) ? number.toFixed(2) : number.toString();
            return parseFloat(fixedNumber).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        } else {
            return number.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
        }
    }

    return null;
}

// ฟังก์ชันหา max productServiceNumber
// export const findMaxProductServiceNumber = (productList: Product[]): number => {
//     const maxNumber = productList.reduce((max, product) => {
//         const productNumber = product.productServiceNumber;
//         return productNumber > max ? productNumber : max;
//     }, 0);

//     return maxNumber === 0 ? 0 : maxNumber;
// };


// ฟังก์ชันหาค่า max ของ subProductServiceNumber
// export const findMaxSubProductServiceNumber = (productList: Product[], productServiceNumber: number): number | null => {
//     // หา product ที่ตรงกับ productServiceNumber
//     const product = productList.find(
//         (p) => p.productServiceNumber === productServiceNumber
//     );
    
//     if (!product || product.subProductList.length === 0) {
//         return null; // กรณีไม่มี product หรือไม่มี subProduct ใน product นี้
//     }

//     // หา max subProductServiceNumber ใน subProductList
//     const maxSubProductServiceNumber = product.subProductList.reduce((max, subProduct) => {
//         const subProductNumber = subProduct.subProductServiceNumber;
//         return subProductNumber > max ? subProductNumber : max;
//     }, 0);

//     return maxSubProductServiceNumber;
// };

