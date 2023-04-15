

export default function SidebarWrapper(children) {

    return(
       <section>
         <ul className={`sidebar-wrapper`}>
            {children.children}
        </ul>
       </section>
    )
}