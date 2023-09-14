import Image from 'next/image'
import Img2 from '../images/Employees.png'
import Layout from '../components/Layout'
import MyBarChart from '@/components/Charts'
import ResponsiveGrid from '@/components/Charts/Grid'
import MyChart from '@/components/Charts/index copy'
import Notice from '@/components/Notice'

export default function Home() {
  return (
    <Layout>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%'
        }}>
            <MyBarChart />
            <Image src={Img2} width={400} height={400} />
            <ResponsiveGrid />
        </div>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%'
        }}>
          <MyChart />
          <Notice />
        </div>
    </Layout>
  )
}
