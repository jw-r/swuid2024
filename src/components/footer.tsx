const Footer = () => {
  return (
    <footer id="footer" className="py-[42px] text-center lg:py-[105px]">
      <p className="text-caption-01 lg:text-web-caption-01">
        Copyright© Industrial Design,Seoul Women’s University,
        <br />
        All rights reserved 서울여자대학교 미래산업융합대학 <br className="lg:hidden" />
        서울시 노원구 화랑로 621
      </p>
      <div className="text-caption-01 lg:text-web-caption-01 text-primary-02">
        <a href="https://www.instagram.com/swu_id/" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>{' '}
        |{' '}
        <a
          href="https://www.behance.net/2024swindustr/projects"
          target="_blank"
          rel="noopener noreferrer"
        >
          Behence
        </a>{' '}
        |{' '}
        <a href="https://notefolio.net/swuid2024" target="_blank" rel="noopener noreferrer">
          Notefolio
        </a>
      </div>
    </footer>
  )
}

export default Footer
