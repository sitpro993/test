import React from 'react'

interface HomePageContent {
  title: string
  subtitle: string
  img: string
}

export const homepageContent: HomePageContent[] = [
  {
    title: 'Vận hành đơn giản',
    img: '/images/rectangle1.png',
    subtitle: `<p>
              Tăng mức độ phủ sóng theo khu vực / Địa lý / ISP
              <br />
              Cải thiện hiệu suất tổng thể
              <br />
              Dự phòng / Chuyển đổi dự phòng
              <br />
              Giúp hệ thống hoạt động tốt, đáp ứng lượng CCU lớn.
            </p>`,
  },
]
