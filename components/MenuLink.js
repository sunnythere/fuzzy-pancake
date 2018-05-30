import Link from 'next/link'

function renderSubmenu(menuObj, handleClick) {
  if (!menuObj.subMenu) { return null; }

  return (
    menuObj.subMenu.map((subMenuItem, indx) => (
      <li key={`${subMenuItem.id}-${indx}`}
                onClick={handleClick}
      >
        <Link prefetch
          href={`/${subMenuItem.id}`}
          scroll={false}>
          <a><h4>{subMenuItem.title}</h4></a>
        </Link>
        <style jsx>{`
        a {
          text-decoration: none;
          color: black;
        }
        a:hover {
          opacity: 0.6;
          cursor: pointer;
        }
        h4 {
          margin: 0;
        }
        li {
          list-style: none;
        }
        `}</style>
      </li>
    ))
  )

}

const MenuLink = ({menuItem, menuToggle, menuOpen, idx, handleClick}) => {

  if (renderSubmenu(menuItem)) {
    return (<span>
      <div
        onClick={menuToggle(idx)}>
        <h3>{menuItem.title}</h3>
      </div>
        <ul className={menuOpen[idx] ? 'open' : 'closed'}>
          {renderSubmenu(menuItem, handleClick)}
        </ul>
      <style jsx>{`
        h3 {
          line-height: 1.15em;
          margin: 0;
        }
        h3:hover {
          opacity: 0.6;
          cursor: pointer;
        }
        ul {
          margin: 0;
          padding-left: 1.25em
        }
        .closed {
          position: absolute;
          overflow: hidden;
          clip: rect(1px 1px 1px 1px);
          clip: rect(1px, 1px, 1px, 1px);
        }
        .open {

        }
      `}</style>
    </span>)
  } else {
    return (<span onClick={handleClick}>
      <Link prefetch
        href={`/${menuItem.id}`}
        scroll={false}>
        <a><h3>{menuItem.title}</h3></a>
      </Link>
      <style jsx>{`
        a {
          text-decoration: none;
          color: black;
        }
        h3 {
          line-height: 1.15em;
          margin: 0;
        }
        h3:hover {
          opacity: 0.6;
        }
      `}</style>
    </span>)
  }
}

export default MenuLink;
