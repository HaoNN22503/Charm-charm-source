export const sendPaymentRequest = async (amount: number): Promise<boolean> => {
  try {
    const response = await fetch("/api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
    });

    if (response.ok) {
      console.log("Payment successful!");
      return true; // Trả về true nếu thanh toán thành công
    } else {
      console.error("Payment failed");
      return false; // Trả về false nếu thanh toán thất bại
    }
  } catch (error) {
    console.error("Error during payment:", error);
    return false; // Trả về false nếu có lỗi khi gửi yêu cầu thanh toán
  }
};
