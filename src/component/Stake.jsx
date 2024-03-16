
import { Button } from "@/components/ui/button"
import { CardHeader, CardContent, Card } from "@/components/ui/card"

const Stake = () => {
    return (
        <div className="grid gap-8 lg:grid-cols-3">
            <div className="flex flex-col gap-4 lg:col-span-2">
                <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <div className="grid w-full grid-cols-2 p-4 items-center">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-lg font-semibold">Ethereum Pool</h2>
                            <p className="text-sm font-medium leading-none text-gray-500">Earn 6.2% APY</p>
                        </div>
                        <div className="flex justify-end">
                            <Button size="sm">Stake</Button>
                            <Button size="sm">UnStake</Button>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-700" />
                    <div className="p-4">
                        <div className="flex flex-col gap-1">
                            <p className="text-xs leading-none text-gray-500">Staked</p>
                            <p className="text-2xl font-semibold">$10,000.00</p>
                            <p className="text-xs leading-none text-gray-500">APY Earnings</p>
                            <p className="text-2xl font-semibold">$310.00</p>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-700" />
                    <div className="p-4">
                        <div className="flex flex-col gap-1">
                            <p className="text-xs leading-none text-gray-500">Duration</p>
                            <p className="text-sm font-medium">90 days</p>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-700" />
                    <div className="p-4">
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-1">
                                <p className="text-xs leading-none text-gray-500">Claimable</p>
                                <p className="text-sm font-medium">$310.00</p>
                            </div>
                            <Button onClick={() => { }}>Claim Reward</Button>
                        </div>
                    </div>
                </div>
            </div>
            <Card className="w-full max-w-sm">
                <CardHeader className="p-6 bg-gray-50 dark:bg-gray-900">
                    <h3 className="text-lg font-medium">Staking Information</h3>
                    <p className="text-sm text-gray-500">The longer you stake, the more you earn.</p>
                </CardHeader>
                <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <h4 className="text-sm font-medium">Stablecoin Pool</h4>
                            <p className="text-xs text-gray-500">Earn 4.5% APY</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h4 className="text-sm font-medium">Ethereum Pool</h4>
                            <p className="text-xs text-gray-500">Earn 6.2% APY</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
export default Stake;
