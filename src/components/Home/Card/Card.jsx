
const Card = () => {
	return (
		<div>
			<div className="bg-white rounded-lg p-4 w-[280px]">
				<img className="rounded-lg mb-4" src={} alt="" />
				<h5 className="text-[#001931] text-lg text-start font-medium mb-4">
					Forest: Focus for Productivity
				</h5>
				<div className="flex justify-between items-center">
					<p className="text-[#00D390] bg-[#F1F5E8] rounded-sm py-1.5 px-2.5 flex items-center justify-center gap-1.5">
						<img className="w-[16px]" src={} alt="" />
						9M
					</p>
					<p className="text-[#FF8811] bg-[#FFF0E1] rounded-sm py-1.5 px-2.5 flex items-center justify-center gap-1.5">
						<img className="w-[16px]" src={} alt="" />5
					</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
