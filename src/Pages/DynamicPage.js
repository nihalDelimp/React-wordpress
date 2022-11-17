import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';


function DynamicPage() {
  const params = useParams()
  const { wp_pages } = useSelector(state => state.app)


  return (
    <div className='container pt-3'>
      {wp_pages && wp_pages.length > 0 &&
        wp_pages.map((item, id) => {
          return (
            <>
              {/* {ele.content.rendered} */}
              {(item.slug === params.slug) &&
                <> <p key={id}>{item.title.rendered}</p>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.content.rendered }}
                  ></div>
                  {parse(item.content.rendered)}</>
              }
            </>
          );
        })}
    </div>
  )
}

export default DynamicPage
