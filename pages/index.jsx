import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPeopleGroup,
  faBook,
  faTrophy,
  faCalendarDay,
  faFileLines,
  faImagePortrait,
  faIdCard,
  faChalkboardTeacher,
  faFileCircleCheck,
} from '@fortawesome/free-solid-svg-icons'
import { faFileWord, faFilePdf } from '@fortawesome/free-regular-svg-icons'

const share = [
  {
    icon: 'icon/facebookicon.svg',
    href: 'https://facebook.com/mwitsquare',
    name: 'MWIT Square',
  },
  {
    icon: 'icon/facebookicon.svg',
    href: 'https://facebook.com/MWITOpenHouse',
    name: 'MWIT Open House',
  },
  {
    icon: 'icon/emailicon.svg',
    href: 'mailto:sc@mwit.ac.th',
    name: 'sc@mwit.ac.th',
  },
  {
    icon: 'icon/globeicon.svg',
    href: 'https://openhouse.mwit.ac.th',
    name: 'openhouse.mwit.ac.th',
  },
  {
    icon: 'icon/globeicon.svg',
    href: 'https://mwit.ac.th',
    name: 'mwit.ac.th',
  },
]

const ctInfo = [
  {
    icon: faCalendarDay,
    text: 'แข่งขันวันเสาร์ที่ 27 สิงหาคม 2565 ในรูปแบบออนไลน์',
  },
  {
    icon: faPeopleGroup,
    text: 'แต่ละโรงเรียนส่งนักเรียนเข้าร่วมได้ไม่เกิน 2 ทีม ทีมละ 3 คน',
  },
  {
    icon: faBook,
    text: 'แข่งขันทั้งหมด 2 รอบ',
  },
  {
    icon: faTrophy,
    text: 'ได้รับเกียรติบัตรและทุนการศึกษาสูงสุด 5,000 บาท',
  },
]

const doc = [
  {
    icon: faFileLines,
    text: 'ใบปพ.7',
    desc: '(ใบรับรองผลการศึกษา)',
  },
  {
    icon: faImagePortrait,
    text: 'รูปถ่ายนักเรียน',
  },
  {
    icon: faIdCard,
    text: 'รูปถ่ายบัตรนักเรียน',
  },
  {
    icon: faChalkboardTeacher,
    text: 'รูปอาจารย์ผู้คุมทีม',
  },
  {
    icon: faFileCircleCheck,
    text: 'เอกสารคำรับรองสถานศึกษา',
    desc: '(ดาวน์โหลดแบบฟอร์มได้จากส่วนบนของเว็บไซต์)',
  },
]

export default function Home() {
  const [remainTime, setRemainTime] = useState(0)
  const [baseUrl, setBaseUrl] = useState(null)
  const [endReg, setEndReg] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setBaseUrl(window.location.origin)
    const timer = setInterval(() => {
      const endRegistTime =
        Date.parse('16 Aug 2022 23:59:59 GMT+7') - new Date()
      const testTime = Date.parse('27 Aug 2022 08:00:00 GMT+7') - new Date()
      setRemainTime(endRegistTime >= 0 ? endRegistTime : testTime)
      setEndReg(endRegistTime < 0)
    }, 100)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className=''>
      <Head>
        <title>MWIT Square 14th</title>
        <meta
          name='description'
          content='MWIT Square 14th | MWIT Open House 2022'
        />
        <meta property='og:title' content='MWIT Square 14th' />
        <meta property='og:type' content='website' />
        {baseUrl && <meta property='og:url' content={baseUrl} />}
        <meta
          property='og:description'
          content='MWIT Square 14th | MWIT Open House 2022'
        ></meta>
        <meta
          property='og:image'
          content='https://mwitsq.vercel.app/img/ogimage.png'
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='mwitsq.vercel.app' />
        {baseUrl && <meta property='twitter:url' content={baseUrl} />}
        <meta name='twitter:title' content='MWIT Square 14th' />
        <meta
          name='twitter:description'
          content='MWIT Square 14th | MWIT Open House 2022'
        />
        <meta
          name='twitter:image'
          content='https://mwitsq.vercel.app/img/ogimage.png'
        />

        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='' data-theme='sq'>
        <img
          className='fixed object-none object-left h-full'
          src='img/coverbg.png'
        />
        <img className='absolute w-full' src='img/coverlogo.png' />
        <div className='absolute'>
          <img className='w-full' src='img/covercrop.png' />
          <div className='flex flex-wrap justify-center space-y-2 pb-8'>
            <div className='space-y-2 w-full px-16 max-w-md sm:max-w-lg'>
              <button
                className='ds-btn ds-btn-sm ds-btn-primary font-IBMPlex font-bold md:ds-btn-md md:text-xl lg:ds-btn-lg lg:text-2xl space-x-2 w-full'
                onClick={() =>
                  window.open(
                    'https://docs.google.com/forms/d/e/1FAIpQLSfg2IzgdYRoXcCwM1Llb9NgD_9D36O_H1i42UqtM9xG-NYCQg/viewform?usp=sf_link',
                    '_blank',
                    'noopener,noreferrer',
                  )
                }
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 md:h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
                  />
                </svg>
                <span>สมัครสอบ</span>
              </button>
              <div className='w-full' />
              <button
                className='ds-btn ds-btn-sm ds-btn-secondary font-IBMPlex font-bold md:ds-btn-md md:text-xl lg:ds-btn-lg lg:text-2xl space-x-2 w-full'
                onClick={() =>
                  window.open(
                    'download/รายละเอียดการสอบ_MWIT_Square_14th.pdf',
                    '_blank',
                    'noopener,noreferrer',
                  )
                }
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 md:h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                  />
                </svg>
                <span>รายละเอียดการสอบ</span>
              </button>
            </div>
            <div className='w-full' />
            <div className='ds-dropdown ds-dropdown-hover sm:ds-dropdown-right'>
              <label
                tabIndex='0'
                className='ds-btn ds-btn-sm ds-btn-ghost font-IBMPlex font-bold text-primary md:ds-btn-md md:text-xl lg:text-2xl m-1 space-x-2'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 md:h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
                  />
                </svg>
                <span className=''>ดาวน์โหลดฟอร์มคำรับรองสถานศึกษา</span>
              </label>
              <ul
                tabIndex='0'
                className='ds-dropdown-content ds-menu ds-menu-compact lg:ds-menu-normal p-2 shadow bg-accent rounded-box w-fit'
              >
                <li>
                  <a
                    className=' hover:text-blue-500'
                    href='/download/คํารับรองสถานศึกษา.docx'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FontAwesomeIcon icon={faFileWord} className='h-6' />
                    .docx
                  </a>
                </li>
                <li>
                  <a
                    className='hover:text-red-500'
                    href='/download/คํารับรองสถานศึกษา.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FontAwesomeIcon icon={faFilePdf} className='h-6' />
                    .pdf
                  </a>
                </li>
              </ul>
            </div>
            <div className='w-full' />
            <div className='max-w-xl pt-5 space-y-4 text-center'>
              <span className='text-xl md:text-2xl lg:text-4xl font-IBMPlex font-bold'>
                {!endReg ? 'เหลือเวลารับสมัคร' : 'นับถอยหลังวันแข่งขัน'}
              </span>
              <div className='grid grid-cols-4 gap-2 pb-2'>
                <div className='bg-accent rounded-md text-center p-2'>
                  <div className='font-B612Mono text-2xl md:text-4xl'>
                    {Math.floor(remainTime / (1000 * 60 * 60 * 24))}
                  </div>
                  <div className='font-IBMPlexLoop text-sm md:text-xl'>วัน</div>
                </div>
                <div className='bg-accent rounded-md text-center p-2'>
                  <div className='font-B612Mono text-2xl md:text-4xl'>
                    {Math.floor(
                      (remainTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
                    )}
                  </div>
                  <div className='font-IBMPlexLoop text-sm md:text-xl'>
                    ชั่วโมง
                  </div>
                </div>
                <div className='bg-accent rounded-md text-center p-2'>
                  <div className='font-B612Mono text-2xl md:text-4xl'>
                    {Math.floor((remainTime % (1000 * 60 * 60)) / (1000 * 60))}
                  </div>
                  <div className='font-IBMPlexLoop text-sm md:text-xl'>
                    นาที
                  </div>
                </div>
                <div className='bg-accent rounded-md text-center p-2'>
                  <div className='font-B612Mono text-2xl md:text-4xl'>
                    {Math.floor((remainTime % (1000 * 60)) / 1000)}
                  </div>
                  <div className='font-IBMPlexLoop text-sm md:text-xl'>
                    วินาที
                  </div>
                </div>
              </div>
              <span className='font-IBMPlexLoop text-sm md:text-base lg:text-xl'>
                {!endReg
                  ? 'รับสมัครถึง 16 สิงหาคม 2565'
                  : 'แข่งขัน 27 สิงหาคม 2565'}
              </span>
            </div>
          </div>

          <div className='w-full bg-gradient-to-b from-transparent to-white py-4 md:p-8'>
            <div className='flex flex-wrap gap-2 justify-center'>
              <span className='text-center text-xl md:text-2xl lg:text-4xl text-black font-bold font-IBMPlex'>
                เอกสารที่ต้องใช้
              </span>
              <div className='w-full' />
              <div className='grid grid-cols-2 md:grid-cols-6 w-full max-w-7xl pt-4 px-8 gap-4'>
                {doc.map((t, idx) => (
                  <div
                    className={
                      (idx < 3
                        ? 'md:col-span-2'
                        : idx === 4
                        ? 'col-span-2 md:col-span-3'
                        : 'md:col-span-3') +
                      ' grid grid-rows-2 justify-items-center gap-y-4 hover:scale-105 transition-all duration-200 text-pa hover:text-pb'
                    }
                    key={idx}
                  >
                    <FontAwesomeIcon icon={t.icon} className='h-16' />
                    <div className='text-center text-sm md:text-base lg:text-xl font-IBMPlexLoop'>
                      {t.text}
                      <br />
                      {t?.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='w-full bg-gradient-to-r from-pa to-pb py-4 md:p-8'>
            <div className='flex flex-wrap gap-2 justify-center'>
              <span className='text-center text-xl md:text-2xl lg:text-4xl text-white font-bold font-IBMPlex'>
                การแข่งขัน
              </span>
              <div className='w-full' />
              <div className='grid grid-cols-2 md:grid-cols-4 w-full max-w-7xl pt-4 px-8 gap-4'>
                {ctInfo.map((t, idx) => (
                  <div
                    className='grid grid-rows-2 justify-items-center gap-y-4 hover:scale-105 transition-all duration-200 text-violet-300 hover:text-violet-100'
                    key={idx}
                  >
                    <FontAwesomeIcon icon={t.icon} className='h-16' />
                    <div className='text-center text-sm md:text-base lg:text-xl font-IBMPlexLoop'>
                      {t.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <footer className='w-full bg-primary'>
            <div className='flex flex-wrap gap-4 p-4 items-center'>
              <img src='img/logo.png' className='h-12 pr-2' />
              {share.map((l, idx) => (
                <div
                  className='grid grid-flow-col auto-cols-max space-x-2 hover:scale-105 hover:cursor-pointer transition-all text-white hover:text-blue-300'
                  onClick={() =>
                    window.open(l.href, '_blank', 'noopener,noreferrer')
                  }
                  key={idx}
                >
                  <img src={l.icon} className='h-4 md:h-5' />
                  <span className='self-center text-sm md:text-base font-IBMPlex font-semibold'>
                    {l.name}
                  </span>
                </div>
              ))}
            </div>
          </footer>
        </div>
      </main>
    </div>
  )
}
