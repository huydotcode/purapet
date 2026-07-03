export type SpecValue = {
  type?: "check" | "cross";
  main?: string;
  sub?: string;
  highlight: boolean;
  empty?: boolean;
};

export type SpecRow = {
  name: string;
  desc: string;
  purrafeed: SpecValue;
  solo: SpecValue;
  traditional: SpecValue;
};

export const specsData: SpecRow[] = [
  {
    name: "Dung tích bình chứa hạt",
    desc: "Đủ dung tích hạt cho thú cưng ăn trong thời gian dài khi vắng nhà.",
    purrafeed: { main: "5 Lít", sub: "~2.5kg hạt khô", highlight: true },
    solo: { main: "3 Lít", sub: "~1.5kg", highlight: false },
    traditional: { main: "Không có", sub: "", highlight: false, empty: true },
  },
  {
    name: "Camera HD giám sát",
    desc: "Giám sát từ xa, hỗ trợ đàm thoại và nhìn đêm hồng ngoại.",
    purrafeed: { main: "Camera 1080P", sub: "đàm thoại 2 chiều", highlight: true },
    solo: { main: "Không hỗ trợ", sub: "", highlight: false, empty: true },
    traditional: { main: "Không có", sub: "", highlight: false, empty: true },
  },
  {
    name: "Khóa tươi chống ẩm",
    desc: "Hệ thống bảo quản đa lớp khóa chặt dưỡng chất, tránh ẩm mốc.",
    purrafeed: { main: "Triple Fresh Lock", sub: "Silicone 3 lớp", highlight: true },
    solo: { main: "Cơ bản", sub: "Vòng nắp silicone", highlight: false },
    traditional: { main: "Không hỗ trợ", sub: "Hạt dễ ỉu", highlight: false, empty: true },
  },
  {
    name: "Nguồn điện dự phòng",
    desc: "Nguồn pin dự trữ duy trì thiết bị hoạt động liên tục khi mất điện.",
    purrafeed: { main: "Pin D dự phòng", sub: "dự trữ 30 ngày", highlight: true },
    solo: { main: "Pin AAA dự phòng", sub: "dự trữ 7 ngày", highlight: false },
    traditional: { main: "Không cần thiết", sub: "", highlight: false, empty: true },
  },
  {
    name: "Hỗ trợ hạt Freeze-dried",
    desc: "Khả năng tương thích với các loại hạt sấy thăng hoa kích thước lớn.",
    purrafeed: { type: "check", highlight: true },
    solo: { type: "check", highlight: false },
    traditional: { type: "cross", highlight: false },
  },
  {
    name: "Cảm biến đo lượng và chống kẹt",
    desc: "Công nghệ cảm biến thông minh ngăn ngừa tắc nghẽn và đo khẩu phần.",
    purrafeed: { main: "Đo lượng hạt", sub: "& cảm biến hồng ngoại", highlight: true },
    solo: { main: "Cơ bản", sub: "chống kẹt cơ học", highlight: false },
    traditional: { main: "Không có", sub: "", highlight: false, empty: true },
  },
];
