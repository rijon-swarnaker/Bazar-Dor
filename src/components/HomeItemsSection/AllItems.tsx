import { CardItemsType } from '@/Types/CardItemType';
import React from 'react';
import ItemsSortList from '../SortBy/SortBy';



const AllItemsPage = async() => {
    const res = await fetch(
        "https://api.abcz.workers.dev/api/bazardor/products",
      );
      if (!res.ok) {
        throw new Error("Failed to fetch api data");
      }
      const data:CardItemsType[] = await res.json();
      console.log(data);
    return (
        <div className='mt-8 mb-8' id='all-items'>
            <div>
                <h1 className="text-2xl font-bold"  >সব পণ্য</h1>
                <div className='items-center'>
                    {/* Total items */}
                    <div className=''>
                        <p>মোট {data.length}টি পণ্য দেখানো হচ্ছে</p>
                    </div>
                    {/* Sort by */}
                    <div>
                        
                        <ItemsSortList data={data}/>
                    </div>
                    

                </div>
            </div>
            
        </div>
    );
};

export default AllItemsPage;