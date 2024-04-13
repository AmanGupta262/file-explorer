import { useState } from 'react';
import './folder.scss';

type TFolderProps = {
  name: string;
  content?: Array<TFolderProps>;
};

export const Folder = ({ name, content }: TFolderProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div tabIndex={0} role='button' onClick={() => setIsExpanded(!isExpanded)} className='Folder'>
        <div
          style={{
            transition: 'all 0.1s ease',
            transform: isExpanded ? 'rotate(0deg)' : 'rotate(-90deg)',
          }}
          className='expander'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            className='bi bi-chevron-down'
            viewBox='0 0 16 16'
          >
            <path
              fillRule='evenodd'
              d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'
            />
          </svg>
        </div>
        <div className='folderIcon'>
          <svg
            version='1.1'
            id='Layer_1'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            viewBox='0 0 512 512'
            xmlSpace='preserve'
          >
            <path
              id='SVGCleanerId_0'
              style={{ fill: '#FFC36E' }}
              d='M183.295,123.586H55.05c-6.687,0-12.801-3.778-15.791-9.76l-12.776-25.55
	l12.776-25.55c2.99-5.982,9.103-9.76,15.791-9.76h128.246c6.687,0,12.801,3.778,15.791,9.76l12.775,25.55l-12.776,25.55
	C196.096,119.808,189.983,123.586,183.295,123.586z'
            />
            <g>
              <path
                id='SVGCleanerId_0_1_'
                style={{ fill: '#FFC36E' }}
                d='M183.295,123.586H55.05c-6.687,0-12.801-3.778-15.791-9.76l-12.776-25.55
		l12.776-25.55c2.99-5.982,9.103-9.76,15.791-9.76h128.246c6.687,0,12.801,3.778,15.791,9.76l12.775,25.55l-12.776,25.55
		C196.096,119.808,189.983,123.586,183.295,123.586z'
              />
            </g>
            <path
              style={{ fill: '#EFF2FA' }}
              d='M485.517,70.621H26.483c-4.875,0-8.828,3.953-8.828,8.828v44.138h476.69V79.448
	C494.345,74.573,490.392,70.621,485.517,70.621z'
            />
            <rect
              x='17.655'
              y='105.931'
              style={{ fill: '#E1E6F2' }}
              width='476.69'
              height='17.655'
            />
            <path
              style={{ fill: '#FFD782' }}
              d='M494.345,88.276H217.318c-3.343,0-6.4,1.889-7.895,4.879l-10.336,20.671
	c-2.99,5.982-9.105,9.76-15.791,9.76H55.05c-6.687,0-12.801-3.778-15.791-9.76L28.922,93.155c-1.495-2.99-4.552-4.879-7.895-4.879
	h-3.372C7.904,88.276,0,96.18,0,105.931v335.448c0,9.751,7.904,17.655,17.655,17.655h476.69c9.751,0,17.655-7.904,17.655-17.655
	V105.931C512,96.18,504.096,88.276,494.345,88.276z'
            />
            <path
              style={{ fill: '#FFC36E' }}
              d='M485.517,441.379H26.483c-4.875,0-8.828-3.953-8.828-8.828l0,0c0-4.875,3.953-8.828,8.828-8.828
	h459.034c4.875,0,8.828,3.953,8.828,8.828l0,0C494.345,437.427,490.392,441.379,485.517,441.379z'
            />
            <path
              style={{ fill: '#EFF2FA' }}
              d='M326.621,220.69h132.414c4.875,0,8.828-3.953,8.828-8.828v-70.621c0-4.875-3.953-8.828-8.828-8.828
	H326.621c-4.875,0-8.828,3.953-8.828,8.828v70.621C317.793,216.737,321.746,220.69,326.621,220.69z'
            />
            <path
              style={{ fill: '#C7CFE2' }}
              d='M441.379,167.724h-97.103c-4.875,0-8.828-3.953-8.828-8.828l0,0c0-4.875,3.953-8.828,8.828-8.828
	h97.103c4.875,0,8.828,3.953,8.828,8.828l0,0C450.207,163.772,446.254,167.724,441.379,167.724z'
            />
            <path
              style={{ fill: '#D7DEED' }}
              d='M441.379,203.034h-97.103c-4.875,0-8.828-3.953-8.828-8.828l0,0c0-4.875,3.953-8.828,8.828-8.828
	h97.103c4.875,0,8.828,3.953,8.828,8.828l0,0C450.207,199.082,446.254,203.034,441.379,203.034z'
            />
          </svg>
        </div>
        <div className='folderName'>{name}</div>
      </div>
      {isExpanded && (
        <div className='folderChildren'>
          {content?.map((child) =>
            child.content ? (
              <Folder key={child.name} {...child} />
            ) : (
              <div className='file' key={child.name}>
                <div className='fileIcon'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    version='1.1'
                    viewBox='0 0 256 256'
                    xmlSpace='preserve'
                  >
                    <defs />
                    <g
                      style={{
                        stroke: 'none',
                        strokeWidth: 0,
                        strokeDasharray: 'none',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        strokeMiterlimit: 10,
                        fill: 'none',
                        fillRule: 'nonzero',
                        opacity: 1,
                      }}
                      transform='translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)'
                    >
                      <path
                        d='M 77.474 17.28 L 61.526 1.332 C 60.668 0.473 59.525 0 58.311 0 H 15.742 c -2.508 0 -4.548 2.04 -4.548 4.548 v 80.904 c 0 2.508 2.04 4.548 4.548 4.548 h 58.516 c 2.508 0 4.549 -2.04 4.549 -4.548 V 20.496 C 78.807 19.281 78.333 18.138 77.474 17.28 z M 61.073 5.121 l 12.611 12.612 H 62.35 c -0.704 0 -1.276 -0.573 -1.276 -1.277 V 5.121 z M 74.258 87 H 15.742 c -0.854 0 -1.548 -0.694 -1.548 -1.548 V 4.548 C 14.194 3.694 14.888 3 15.742 3 h 42.332 v 13.456 c 0 2.358 1.918 4.277 4.276 4.277 h 13.457 v 64.719 C 75.807 86.306 75.112 87 74.258 87 z'
                        style={{
                          stroke: 'none',
                          strokeWidth: 1,
                          strokeDasharray: 'none',
                          strokeLinecap: 'butt',
                          strokeLinejoin: 'miter',
                          strokeMiterlimit: 10,
                          fill: 'rgb(0,0,0)',
                          fillRule: 'nonzero',
                          opacity: 1,
                        }}
                        transform=' matrix(1 0 0 1 0 0) '
                        strokeLinecap='round'
                      />
                      <path
                        d='M 68.193 33.319 H 41.808 c -0.829 0 -1.5 -0.671 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 26.385 c 0.828 0 1.5 0.671 1.5 1.5 S 69.021 33.319 68.193 33.319 z'
                        style={{
                          stroke: 'none',
                          strokeWidth: 1,
                          strokeDasharray: 'none',
                          strokeLinecap: 'butt',
                          strokeLinejoin: 'miter',
                          strokeMiterlimit: 10,
                          fill: 'rgb(0,0,0)',
                          fillRule: 'nonzero',
                          opacity: 1,
                        }}
                        transform=' matrix(1 0 0 1 0 0) '
                        strokeLinecap='round'
                      />
                      <path
                        d='M 34.456 33.319 H 21.807 c -0.829 0 -1.5 -0.671 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 12.649 c 0.829 0 1.5 0.671 1.5 1.5 S 35.285 33.319 34.456 33.319 z'
                        style={{
                          stroke: 'none',
                          strokeWidth: 1,
                          strokeDasharray: 'none',
                          strokeLinecap: 'butt',
                          strokeLinejoin: 'miter',
                          strokeMiterlimit: 10,
                          fill: 'rgb(0,0,0)',
                          fillRule: 'nonzero',
                          opacity: 1,
                        }}
                        transform=' matrix(1 0 0 1 0 0) '
                        strokeLinecap='round'
                      />
                      <linearGradient
                        id='SVGID_2'
                        gradientUnits='userSpaceOnUse'
                        x1='21.8064'
                        y1='19.2332'
                        x2='42.2984'
                        y2='19.2332'
                      >
                        <stop
                          offset='0%'
                          style={{ stopColor: 'rgb(255,255,255)', stopOpacity: 1 }}
                        />
                        <stop offset='100%' style={{ stopColor: 'rgb(0,0,0)', stopOpacity: 1 }} />
                      </linearGradient>
                      <line
                        x1='-10.246'
                        y1={0}
                        x2='10.246'
                        y2={0}
                        style={{
                          stroke: 'none',
                          strokeWidth: 1,
                          strokeDasharray: 'none',
                          strokeLinecap: 'butt',
                          strokeLinejoin: 'miter',
                          strokeMiterlimit: 10,
                          fill: 'url(#SVGID_2)',
                          fillRule: 'nonzero',
                          opacity: 1,
                        }}
                        transform=' matrix(1 0 0 1 0 0) '
                      />
                      <path
                        d='M 42.298 20.733 H 21.807 c -0.829 0 -1.5 -0.671 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 20.492 c 0.829 0 1.5 0.671 1.5 1.5 S 43.127 20.733 42.298 20.733 z'
                        style={{
                          stroke: 'none',
                          strokeWidth: 1,
                          strokeDasharray: 'none',
                          strokeLinecap: 'butt',
                          strokeLinejoin: 'miter',
                          strokeMiterlimit: 10,
                          fill: 'rgb(0,0,0)',
                          fillRule: 'nonzero',
                          opacity: 1,
                        }}
                        transform=' matrix(1 0 0 1 0 0) '
                        strokeLinecap='round'
                      />
                      <path
                        d='M 68.193 44.319 H 21.807 c -0.829 0 -1.5 -0.671 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 46.387 c 0.828 0 1.5 0.671 1.5 1.5 S 69.021 44.319 68.193 44.319 z'
                        style={{
                          stroke: 'none',
                          strokeWidth: 1,
                          strokeDasharray: 'none',
                          strokeLinecap: 'butt',
                          strokeLinejoin: 'miter',
                          strokeMiterlimit: 10,
                          fill: 'rgb(0,0,0)',
                          fillRule: 'nonzero',
                          opacity: 1,
                        }}
                        transform=' matrix(1 0 0 1 0 0) '
                        strokeLinecap='round'
                      />
                      <path
                        d='M 48.191 55.319 H 21.807 c -0.829 0 -1.5 -0.672 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 26.385 c 0.828 0 1.5 0.672 1.5 1.5 S 49.02 55.319 48.191 55.319 z'
                        style={{
                          stroke: 'none',
                          strokeWidth: 1,
                          strokeDasharray: 'none',
                          strokeLinecap: 'butt',
                          strokeLinejoin: 'miter',
                          strokeMiterlimit: 10,
                          fill: 'rgb(0,0,0)',
                          fillRule: 'nonzero',
                          opacity: 1,
                        }}
                        transform=' matrix(1 0 0 1 0 0) '
                        strokeLinecap='round'
                      />
                      <path
                        d='M 68.193 55.319 H 55.544 c -0.828 0 -1.5 -0.672 -1.5 -1.5 s 0.672 -1.5 1.5 -1.5 h 12.649 c 0.828 0 1.5 0.672 1.5 1.5 S 69.021 55.319 68.193 55.319 z'
                        style={{
                          stroke: 'none',
                          strokeWidth: 1,
                          strokeDasharray: 'none',
                          strokeLinecap: 'butt',
                          strokeLinejoin: 'miter',
                          strokeMiterlimit: 10,
                          fill: 'rgb(0,0,0)',
                          fillRule: 'nonzero',
                          opacity: 1,
                        }}
                        transform=' matrix(1 0 0 1 0 0) '
                        strokeLinecap='round'
                      />
                      <path
                        d='M 68.193 66.319 H 21.807 c -0.829 0 -1.5 -0.672 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 46.387 c 0.828 0 1.5 0.672 1.5 1.5 S 69.021 66.319 68.193 66.319 z'
                        style={{
                          stroke: 'none',
                          strokeWidth: 1,
                          strokeDasharray: 'none',
                          strokeLinecap: 'butt',
                          strokeLinejoin: 'miter',
                          strokeMiterlimit: 10,
                          fill: 'rgb(0,0,0)',
                          fillRule: 'nonzero',
                          opacity: 1,
                        }}
                        transform=' matrix(1 0 0 1 0 0) '
                        strokeLinecap='round'
                      />
                      <path
                        d='M 68.193 77.319 H 55.544 c -0.828 0 -1.5 -0.672 -1.5 -1.5 s 0.672 -1.5 1.5 -1.5 h 12.649 c 0.828 0 1.5 0.672 1.5 1.5 S 69.021 77.319 68.193 77.319 z'
                        style={{
                          stroke: 'none',
                          strokeWidth: 1,
                          strokeDasharray: 'none',
                          strokeLinecap: 'butt',
                          strokeLinejoin: 'miter',
                          strokeMiterlimit: 10,
                          fill: 'rgb(0,0,0)',
                          fillRule: 'nonzero',
                          opacity: 1,
                        }}
                        transform=' matrix(1 0 0 1 0 0) '
                        strokeLinecap='round'
                      />
                    </g>
                  </svg>
                </div>
                {child.name}
              </div>
            ),
          )}
        </div>
      )}
    </>
  );
};
