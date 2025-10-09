import React from "react";

const Skeleton = ({count = 8}) => {
	return (
		<div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4 mb-5 lg:mb-20">
			{Array.from({ length: count }).map((_, i) => (
				<div key={i} className="flex flex-col gap-5 mx-2 lg:mx-0">
					<div className="skeleton h-32 w-full"></div>
					<div className="skeleton h-4 w-28"></div>
					<div className="skeleton h-4 w-full"></div>
					<div className="skeleton h-4 w-full"></div>
				</div>
			))}
		</div>
	);
};

export default Skeleton;
