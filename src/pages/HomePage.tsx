import React from 'react'
import PageLayout from '../components/PageLayout'
import { Box, Typography, useTheme } from '@mui/material'
import AppTitle from '../components/AppTitle'
import HomePageItem from '../components/HomePageItem'
import NewsCard from '../components/NewsCard'
import Container from '../components/Layout/Container'
import { useStyles } from './HomePage.css'

export default function HomePage() {
  const theme = useTheme()
  const classes = useStyles({})

  return (
    <PageLayout
      title="We are Sigma OTT"
      subtitle="The world leading of video streaming solution"
      titleVariant="h2"
    >
      <Box>
        <Container>
          <HomePageItem
            title="Vận hành đơn giản"
            subtitle={
              <p>
                Tăng mức độ phủ sóng theo khu vực / Địa lý / ISP
                <br />
                Cải thiện hiệu suất tổng thể
                <br />
                Dự phòng / Chuyển đổi dự phòng
                <br />
                Giúp hệ thống hoạt động tốt, đáp ứng lượng CCU lớn.
              </p>
            }
            img="/images/rectangle1.png"
          />
          <HomePageItem
            direction="row-reverse"
            title="Nâng cao chất lượng dịch vụ"
            subtitle={
              <>
                Tăng mức độ phủ sóng theo khu vực / Địa lý / ISP
                <br />
                Cải thiện hiệu suất tổng thể
                <br />
                Dự phòng / Chuyển đổi dự phòng
                <br />
                Giúp hệ thống hoạt động tốt, đáp ứng lượng CCU lớn.
              </>
            }
            img="/images/rectangle2.png"
          />
          <HomePageItem
            title="Tăng trải nghiệm người dùng"
            subtitle={
              <>
                Tăng mức độ phủ sóng theo khu vực / Địa lý / ISP
                <br />
                Cải thiện hiệu suất tổng thể
                <br />
                Dự phòng / Chuyển đổi dự phòng
                <br />
                Giúp hệ thống hoạt động tốt, đáp ứng lượng CCU lớn.
              </>
            }
            img="/images/rectangle3.png"
          />
          <HomePageItem
            direction="row-reverse"
            title="Tiết giảm chi phí"
            subtitle={
              <>
                Tăng mức độ phủ sóng theo khu vực / Địa lý / ISP
                <br />
                Cải thiện hiệu suất tổng thể
                <br />
                Dự phòng / Chuyển đổi dự phòng
                <br />
                Giúp hệ thống hoạt động tốt, đáp ứng lượng CCU lớn.
              </>
            }
            img="/images/rectangle4.png"
          />
          <HomePageItem
            title="Cung cấp thông tin đầy đủ"
            subtitle={
              <>
                Tăng mức độ phủ sóng theo khu vực / Địa lý / ISP
                <br />
                Cải thiện hiệu suất tổng thể
                <br />
                Dự phòng / Chuyển đổi dự phòng
                <br />
                Giúp hệ thống hoạt động tốt, đáp ứng lượng CCU lớn.
              </>
            }
            img="/images/rectangle5.png"
          />
        </Container>
      </Box>

      <Box
        mb={6}
        py={6}
        sx={{ backgroundColor: theme.palette.background.paper }}
      >
        <Container>
          <Box mb={2.5}>
            <AppTitle
              title="Headline is a beatiful way to begin dreaming"
              textAlign="center"
              subtitle="Headline is a beatiful way to begin dreaming"
            />
          </Box>
          <Box className={classes.characteristic}>
            <Box className={classes.characteristicItem}>
              <img src="/images/rectangle6.png" alt="" />
              <Typography variant="h4" textAlign="center" mt={5.25} mb={2}>
                DRM
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                fontWeight={400}
                textAlign="center"
              >
                Sigma DRM kiểm soát và bảo vệ dữ liệu video, audio qua mạng
                Internet
              </Typography>
            </Box>

            <Box className={classes.characteristicItem}>
              <img src="/images/rectangle7.png" alt="" />
              <Typography variant="h4" textAlign="center" mt={5.25} mb={2}>
                Less CDN
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                fontWeight={400}
                textAlign="center"
              >
                Giải pháp truyền tải nội dung media tới người dùng, giúp tiết
                kiệm chi phí.
              </Typography>
            </Box>

            <Box className={classes.characteristicItem}>
              <img src="/images/rectangle8.png" alt="" />
              <Typography variant="h4" textAlign="center" mt={5.25} mb={2}>
                Multi Screen
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                fontWeight={400}
                textAlign="center"
              >
                Quản lý số lượng thiết bị truy cập video theo người dùng trong
                thời gian thực.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container>
        <Box mb={6}>
          <Box mb={2.5}>
            <AppTitle
              title="Latest Updates"
              textAlign="center"
              subtitle="See what the press has to say about us"
            />
          </Box>
          <Box className={classes.lastestNews}>
            <NewsCard />

            <NewsCard />

            <NewsCard />
          </Box>
        </Box>
      </Container>
    </PageLayout>
  )
}
